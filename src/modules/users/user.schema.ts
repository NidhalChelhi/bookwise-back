import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose"; // Import Types from mongoose
import { UserRole } from "../../common/enums/roles.enum";

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    required: true,
    enum: Object.values(UserRole),
    default: UserRole.User,
  })
  role: UserRole;

  @Prop({ required: false })
  phoneNumber?: string;

  @Prop({
    type: [{ type: Types.ObjectId, ref: "BorrowRequest" }], // Use Types.ObjectId
    default: [],
  })
  borrowRequests: Types.ObjectId[]; // Use Types.ObjectId[]
}

export const UserSchema = SchemaFactory.createForClass(User);
