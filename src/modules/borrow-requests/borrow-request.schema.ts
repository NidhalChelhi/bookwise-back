import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export enum BorrowRequestStatus {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
  RETURNED = "returned",
}

@Schema({ timestamps: true })
export class BorrowRequest extends Document {
  @Prop({ type: Types.ObjectId, ref: "User", required: true })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: "BookCopy", required: true })
  bookCopyId: Types.ObjectId;

  @Prop({
    required: true,
    enum: Object.values(BorrowRequestStatus),
    default: BorrowRequestStatus.PENDING,
  })
  status: BorrowRequestStatus;

  @Prop()
  requestedAt: Date;

  @Prop()
  approvedAt?: Date;

  @Prop()
  returnedAt?: Date;
}

export const BorrowRequestSchema = SchemaFactory.createForClass(BorrowRequest);
