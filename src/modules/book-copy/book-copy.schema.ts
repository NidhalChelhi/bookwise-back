import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { BookCopyCondition } from "src/common/enums/book-copy-condition.enum";
import { BookCopyStatus } from "src/common/enums/book-copy-status.enum";

@Schema({ timestamps: true })
export class BookCopy extends Document {
  @Prop({ required: true, unique: true })
  copyId: string;

  @Prop({ type: Types.ObjectId, ref: "Book", required: true })
  bookId: Types.ObjectId;

  @Prop({ required: true, default: BookCopyStatus.AVAILABLE })
  status: BookCopyStatus;

  @Prop({ required: true, default: BookCopyCondition.GOOD })
  condition: BookCopyCondition;

  @Prop()
  location?: string;

  @Prop()
  notes?: string;
}

export const BookCopySchema = SchemaFactory.createForClass(BookCopy);
