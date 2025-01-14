import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from "@nestjs/common";
import { BookCopyService } from "./book-copy.service";
import { CreateBookCopyDto } from "./dtos/create-book-copy.dto";
import { BookCopy } from "./book-copy.schema";
import { BookCopyStatus } from "src/common/enums/book-copy-status.enum";
import { Public } from "src/common/decorators/public.decorator";

@Public()
@Controller("book-copies")
export class BookCopyController {
  constructor(private readonly bookCopyService: BookCopyService) {}

  @Post()
  async create(
    @Body() createBookCopyDto: CreateBookCopyDto
  ): Promise<BookCopy> {
    return this.bookCopyService.create(createBookCopyDto);
  }

  @Get()
  async findAll(): Promise<BookCopy[]> {
    return this.bookCopyService.findAll();
  }

  @Get("book/:bookId")
  async findByBookId(@Param("bookId") bookId: string): Promise<BookCopy[]> {
    return this.bookCopyService.findByBookId(bookId);
  }

  @Get(":copyId")
  async findByCopyId(@Param("copyId") copyId: string): Promise<BookCopy> {
    return this.bookCopyService.findByCopyId(copyId);
  }

  @Put(":copyId/status")
  async updateStatus(
    @Param("copyId") copyId: string,
    @Body("status") status: BookCopyStatus
  ): Promise<BookCopy> {
    return this.bookCopyService.updateStatus(copyId, status);
  }

  @Delete(":copyId")
  async delete(@Param("copyId") copyId: string): Promise<void> {
    return this.bookCopyService.delete(copyId);
  }
}
