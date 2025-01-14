import { Module } from "@nestjs/common";
import { BorrowRequestController } from "./borrow-requests.controller";
import { BorrowRequestService } from "./borrow-requests.service";
import { MongooseModule } from "@nestjs/mongoose";
import { BorrowRequest, BorrowRequestSchema } from "./borrow-request.schema";
import { UsersModule } from "../users/users.module";
import { BookCopyModule } from "../book-copy/book-copy.module";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BorrowRequest.name, schema: BorrowRequestSchema },
    ]),
    UsersModule, // Import the UsersModule
    BookCopyModule, // Import the BookCopyModule if needed
  ],
  controllers: [BorrowRequestController],
  providers: [BorrowRequestService],
})
export class BorrowRequestsModule {}
