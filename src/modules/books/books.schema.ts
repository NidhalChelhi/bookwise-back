import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { BookGenre } from "src/common/enums/book-genre.enum";

@Schema({ timestamps: true })
export class Book extends Document {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true, enum: BookGenre })
  genre: BookGenre;

  @Prop({ required: true })
  rating: number;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  coverColor: string;

  @Prop({ required: true })
  coverUrl: string;

  @Prop({ required: true })
  summary: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
