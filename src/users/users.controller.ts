import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { AppService } from "src/app.service";
import { UsersService } from "./users.service";
import { User } from "./interfaces/user.interface";
import { CreateUserDto } from "./dto/create-user.dto";
import { randomInt } from "crypto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): User | null {
    return this.usersService.findOne(Number(id));
  }

  @Post()
  create(@Body() user: CreateUserDto) {
    this.usersService.create({
      ...user,
      id: randomInt(1024)
    });
  }

  @Put()
  update(@Body() user: UpdateUserDto) {
    this.usersService.update(user);
  }

  @Delete()
  remove(@Query('id') id: number) {
    this.usersService.remove(id);
  }
}