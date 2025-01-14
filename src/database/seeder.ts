import { Injectable, OnModuleInit } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../modules/users/user.schema";
import { Book } from "../modules/books/books.schema";
import { BookCopy } from "../modules/book-copy/book-copy.schema";
import { BorrowRequest } from "../modules/borrow-requests/borrow-request.schema";
import { seedUsers } from "./seed-data";
import { seedBooks } from "./seed-data";
import { seedBookCopies } from "./seed-data";
import { seedBorrowRequests } from "./seed-data";
import * as bcrypt from "bcrypt";

@Injectable()
export class Seeder implements OnModuleInit {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Book.name) private readonly bookModel: Model<Book>,
    @InjectModel(BookCopy.name) private readonly bookCopyModel: Model<BookCopy>,
    @InjectModel(BorrowRequest.name)
    private readonly borrowRequestModel: Model<BorrowRequest>
  ) {}

  async onModuleInit() {
    await this.seed();
  }

  async seed() {
    // Delete all existing documents
    await this.userModel.deleteMany({});
    await this.bookModel.deleteMany({});
    await this.bookCopyModel.deleteMany({});
    await this.borrowRequestModel.deleteMany({});
    console.log("All existing documents deleted.");

    // Seed Users
    const hashedSeedUsers = await Promise.all(
      seedUsers.map(async (user) => ({
        ...user,
        password: await bcrypt.hash(user.password, 10), // Hash the password
      }))
    );
    const seededUsers = await this.userModel.insertMany(hashedSeedUsers);
    console.log("Users seeded successfully!");

    // Seed Books
    await this.bookModel.insertMany(seedBooks);
    console.log("Books seeded successfully!");

    // Seed Book Copies
    const seededBookCopies =
      await this.bookCopyModel.insertMany(seedBookCopies);
    console.log("Book copies seeded successfully!");

    // Seed Borrow Requests
    // Map seeded users and book copies to their IDs
    const userMap = new Map(seededUsers.map((user) => [user.email, user._id]));
    const bookCopyMap = new Map(
      seededBookCopies.map((copy) => [copy.copyId, copy._id])
    );

    // Replace placeholder user IDs and book copy IDs with actual IDs from the database
    const borrowRequestsWithIds = seedBorrowRequests.map((request) => ({
      ...request,
      userId: userMap.get(request.userId), // Replace placeholder with actual user ID
      bookCopyId: bookCopyMap.get(request.bookCopyId), // Replace placeholder with actual book copy ID
    }));

    // Insert borrow requests and get their IDs
    const seededBorrowRequests = await this.borrowRequestModel.insertMany(
      borrowRequestsWithIds
    );
    console.log("Borrow requests seeded successfully!");

    // Update users' borrowRequests arrays with the newly created borrow request IDs
    for (const request of seededBorrowRequests) {
      await this.userModel.findByIdAndUpdate(request.userId, {
        $push: { borrowRequests: request._id },
      });
    }
    console.log("Users updated with borrow request IDs.");
  }
}
