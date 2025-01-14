import { IsString, IsNotEmpty, IsEnum, IsOptional } from "class-validator";
import { BookCopyCondition } from "src/common/enums/book-copy-condition.enum";
import { BookCopyStatus } from "src/common/enums/book-copy-status.enum";

export class CreateBookCopyDto {
  @IsString()
  @IsNotEmpty()
  copyId: string;

  @IsString()
  @IsNotEmpty()
  bookId: string;

  @IsEnum(BookCopyStatus)
  @IsNotEmpty()
  status: BookCopyStatus;

  @IsEnum(BookCopyCondition)
  @IsNotEmpty()
  condition: BookCopyCondition;

  @IsString()
  @IsOptional()
  location?: string;

  @IsString()
  @IsOptional()
  notes?: string;
}
