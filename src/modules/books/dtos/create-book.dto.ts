import { IsString, IsNumber, IsEnum, IsUrl, IsNotEmpty } from "class-validator";
import { BookGenre } from "src/common/enums/book-genre.enum";

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsEnum(BookGenre)
  @IsNotEmpty()
  genre: BookGenre;

  @IsNumber()
  @IsNotEmpty()
  rating: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  coverColor: string;

  @IsUrl()
  @IsNotEmpty()
  coverUrl: string;

  @IsString()
  @IsNotEmpty()
  summary: string;
}
