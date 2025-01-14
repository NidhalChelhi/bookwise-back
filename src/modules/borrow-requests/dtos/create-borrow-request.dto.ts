import { IsNotEmpty, IsMongoId } from "class-validator";
import { BorrowRequestStatus } from "../borrow-request.schema";

export class CreateBorrowRequestDto {
  @IsMongoId()
  @IsNotEmpty()
  userId: string;

  @IsMongoId()
  @IsNotEmpty()
  bookCopyId: string;

  @IsNotEmpty()
  status: BorrowRequestStatus;
}
