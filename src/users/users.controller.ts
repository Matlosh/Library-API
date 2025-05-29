import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./interfaces/user.interface";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() user: CreateUserDto): Promise<User> {
    return this.usersService.create(user);
  }

  @Get()
  findAll(@Query('page') page?: string): Promise<User[]> {
    return this.usersService.findAll(Number(page));
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() user: UpdateUserDto): Promise<User | null> {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    this.usersService.delete(id);
  }
}