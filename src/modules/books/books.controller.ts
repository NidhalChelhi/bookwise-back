import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
} from "@nestjs/common";
import { BooksService } from "./books.service";
import { CreateBookDto } from "./dtos/create-book.dto";
import { Book } from "./books.schema";
import { Public } from "src/common/decorators/public.decorator";

@Public()
@Controller("books")
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.create(createBookDto);
  }

  @Get()
  async findAll(@Query("genre") genre?: string): Promise<Book[]> {
    if (genre) {
      return this.booksService.findByGenre(genre);
    }
    return this.booksService.findAll();
  }

  @Get(":id")
  async findById(@Param("id") id: string): Promise<Book> {
    return this.booksService.findById(id);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updateBookDto: Partial<CreateBookDto>
  ): Promise<Book> {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string): Promise<void> {
    return this.booksService.delete(id);
  }
}
