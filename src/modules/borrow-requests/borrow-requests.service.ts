import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { BorrowRequest } from "./borrow-request.schema";
import { CreateBorrowRequestDto } from "./dtos/create-borrow-request.dto";
import { User } from "../users/user.schema";
import { BookCopy } from "../book-copy/book-copy.schema";

@Injectable()
export class BorrowRequestService {
  constructor(
    @InjectModel(BorrowRequest.name)
    private readonly borrowRequestModel: Model<BorrowRequest>,
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(BookCopy.name) private readonly bookCopyModel: Model<BookCopy>
  ) {}

  async create(
    createBorrowRequestDto: CreateBorrowRequestDto
  ): Promise<BorrowRequest> {
    const { userId, bookCopyId, status } = createBorrowRequestDto;

    // Check if user exists
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    // Check if book copy exists
    const bookCopy = await this.bookCopyModel.findById(bookCopyId).exec();
    if (!bookCopy) {
      throw new NotFoundException(`Book copy with ID ${bookCopyId} not found`);
    }

    // Create the borrow request
    const borrowRequest = new this.borrowRequestModel({
      userId: new Types.ObjectId(userId),
      bookCopyId: new Types.ObjectId(bookCopyId),
      status,
      requestedAt: new Date(),
    });

    // Save the borrow request
    const savedRequest = await borrowRequest.save();

    // Add the borrow request to the user's borrowRequests array
    await this.userModel.findByIdAndUpdate(userId, {
      $push: { borrowRequests: savedRequest._id },
    });

    return savedRequest;
  }

  async findAll(): Promise<BorrowRequest[]> {
    return this.borrowRequestModel.find().exec();
  }

  async findByUserId(userId: string): Promise<BorrowRequest[]> {
    return this.borrowRequestModel.find({ userId }).exec();
  }

  async updateStatus(
    requestId: string,
    status: string
  ): Promise<BorrowRequest> {
    const updatedRequest = await this.borrowRequestModel
      .findByIdAndUpdate(requestId, { status }, { new: true })
      .exec();
    if (!updatedRequest) {
      throw new NotFoundException(
        `Borrow request with ID ${requestId} not found`
      );
    }
    return updatedRequest;
  }

  async delete(requestId: string): Promise<void> {
    const result = await this.borrowRequestModel
      .findByIdAndDelete(requestId)
      .exec();
    if (!result) {
      throw new NotFoundException(
        `Borrow request with ID ${requestId} not found`
      );
    }
  }
}
