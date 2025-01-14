import { Module } from "@nestjs/common";
import { BookCopyService } from "./book-copy.service";
import { BookCopyController } from "./book-copy.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { BookCopy, BookCopySchema } from "./book-copy.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BookCopy.name, schema: BookCopySchema },
    ]),
  ],
  providers: [BookCopyService],
  controllers: [BookCopyController],
  exports: [MongooseModule],
})
export class BookCopyModule {}
