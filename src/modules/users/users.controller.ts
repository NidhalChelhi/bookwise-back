import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Logger,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./user.schema";
import { CreateUserDto } from "./dto/create-user.dto";
import { Public } from "src/common/decorators/public.decorator";

@Public()
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    Logger.log(createUserDto);
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(":id")
  async findById(@Param("id") id: string): Promise<User> {
    return this.usersService.findById(id);
  }

  @Get("email/:email")
  async findByEmail(@Param("email") email: string): Promise<User> {
    return this.usersService.findByEmail(email);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updateUserDto: Partial<CreateUserDto>
  ): Promise<User> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string): Promise<void> {
    return this.usersService.delete(id);
  }
}
