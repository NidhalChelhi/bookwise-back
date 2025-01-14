import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from "@nestjs/common";
import { BorrowRequestService } from "./borrow-requests.service";
import { CreateBorrowRequestDto } from "./dtos/create-borrow-request.dto";
import { Public } from "src/common/decorators/public.decorator";

@Public()
@Controller("borrow-requests")
export class BorrowRequestController {
  constructor(private readonly borrowRequestService: BorrowRequestService) {}

  @Post()
  async create(@Body() createBorrowRequestDto: CreateBorrowRequestDto) {
    return this.borrowRequestService.create(createBorrowRequestDto);
  }

  @Get()
  async findAll() {
    return this.borrowRequestService.findAll();
  }

  @Get("user/:userId")
  async findByUserId(@Param("userId") userId: string) {
    return this.borrowRequestService.findByUserId(userId);
  }

  @Put(":requestId/status")
  async updateStatus(
    @Param("requestId") requestId: string,
    @Body("status") status: string
  ) {
    return this.borrowRequestService.updateStatus(requestId, status);
  }

  @Delete(":requestId")
  async delete(@Param("requestId") requestId: string) {
    return this.borrowRequestService.delete(requestId);
  }
}
