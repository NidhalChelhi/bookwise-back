import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BookCopy } from "./book-copy.schema";
import { CreateBookCopyDto } from "./dtos/create-book-copy.dto";
import { BookCopyStatus } from "src/common/enums/book-copy-status.enum";

@Injectable()
export class BookCopyService {
  constructor(
    @InjectModel(BookCopy.name) private readonly bookCopyModel: Model<BookCopy>
  ) {}

  async create(createBookCopyDto: CreateBookCopyDto): Promise<BookCopy> {
    const createdCopy = new this.bookCopyModel(createBookCopyDto);
    return createdCopy.save();
  }

  async findAll(): Promise<BookCopy[]> {
    return this.bookCopyModel.find().exec();
  }

  async findByBookId(bookId: string): Promise<BookCopy[]> {
    return this.bookCopyModel.find({ bookId }).exec();
  }

  async findByCopyId(copyId: string): Promise<BookCopy> {
    const copy = await this.bookCopyModel.findOne({ copyId }).exec();
    if (!copy) {
      throw new NotFoundException(`Book copy with ID ${copyId} not found`);
    }
    return copy;
  }

  async updateStatus(
    copyId: string,
    status: BookCopyStatus
  ): Promise<BookCopy> {
    const updatedCopy = await this.bookCopyModel
      .findOneAndUpdate({ copyId }, { status }, { new: true })
      .exec();
    if (!updatedCopy) {
      throw new NotFoundException(`Book copy with ID ${copyId} not found`);
    }
    return updatedCopy;
  }

  async delete(copyId: string): Promise<void> {
    const result = await this.bookCopyModel.findOneAndDelete({ copyId }).exec();
    if (!result) {
      throw new NotFoundException(`Book copy with ID ${copyId} not found`);
    }
  }
}
