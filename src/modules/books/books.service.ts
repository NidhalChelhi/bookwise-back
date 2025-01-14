import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Book } from "./books.schema";
import { CreateBookDto } from "./dtos/create-book.dto";

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<Book>
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findById(id: string): Promise<Book> {
    const book = await this.bookModel.findOne({ id: id }).exec();
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  async findByGenre(genre: string): Promise<Book[]> {
    return this.bookModel.find({ genre: genre }).exec();
  }

  async update(
    id: string,
    updateBookDto: Partial<CreateBookDto>
  ): Promise<Book> {
    const book = await this.bookModel.findOne({ id: id }).exec();
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    const updatedBook = await this.bookModel
      .findOneAndUpdate({ id: id }, updateBookDto, { new: true })
      .exec();
    return updatedBook;
  }

  async delete(id: string): Promise<void> {
    const book = await this.bookModel.findOne({ id: id }).exec();
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    await this.bookModel.deleteOne({ id: id }).exec();
  }
}
