import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./modules/users/users.module";
import { AuthModule } from "./modules/auth/auth.module";
import { APP_GUARD } from "@nestjs/core";
import { AuthCompositeGuard } from "./common/guards/auth-composite.guard";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { JwtAuthGuard } from "./common/guards/jwt-auth.guard";
import { RolesGuard } from "./common/guards/roles.guard";
import { BooksModule } from "./modules/books/books.module";
import { BookCopyModule } from "./modules/book-copy/book-copy.module";
import { Seeder } from "./database/seeder";
import { Book, BookSchema } from "./modules/books/books.schema";
import { BookCopy, BookCopySchema } from "./modules/book-copy/book-copy.schema";
import { BorrowRequestsModule } from "./modules/borrow-requests/borrow-requests.module";
import { User, UserSchema } from "./modules/users/user.schema";
import {
  BorrowRequest,
  BorrowRequestSchema,
} from "./modules/borrow-requests/borrow-request.schema";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
    MongooseModule.forFeature([
      { name: BookCopy.name, schema: BookCopySchema },
    ]),

    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: BorrowRequest.name, schema: BorrowRequestSchema },
    ]),

    UsersModule,
    AuthModule,
    BooksModule,
    BookCopyModule,
    BorrowRequestsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    JwtAuthGuard,
    RolesGuard,
    {
      provide: APP_GUARD,
      useClass: AuthCompositeGuard,
    },
    Seeder,
  ],
})
export class AppModule {}
