import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiCreatedResponse, ApiNoContentResponse, ApiOkResponse } from "@nestjs/swagger";
import { User } from "./schemas/user.schema";
import { UserResponseDto } from "./dto/user-response.dto";
import { Library } from "src/libraries/schemas/library.schema";
import { LibraryResponseDto } from "src/libraries/dto/library-response.dto";
import { UserLibrariesResponseDto } from "./dto/user-libraries-response.dto";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({
    type: UserResponseDto,
    description: 'Create a new user'
  })
  create(@Body() user: CreateUserDto): Promise<User> {
    return this.usersService.create(user);
  }

  @Get()
  @ApiOkResponse({
    type: [UserResponseDto],
    description: 'Retrieve a list of users'
  })
  findAll(@Query('page') page?: string): Promise<User[]> {
    return this.usersService.findAll(Number(page));
  }

  @Get(':id')
  @ApiOkResponse({
    type: UserResponseDto,
    description: 'Retrieve a user by ID'
  })
  findOne(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findOne(id);
  }

  @Get(':id/libraries')
  @ApiOkResponse({
    type: [UserLibrariesResponseDto],
    description: 'Retrieve libraries associated with a user by ID'
  })
  findLibraries(@Param('id') id: string): Promise<Library[]> {
    return this.usersService.findLibraries(id);
  }

  @Put(':id')
  @ApiOkResponse({
    type: UserResponseDto,
    description: 'Update a user by ID'
  })
  update(@Param('id') id: string, @Body() user: UpdateUserDto): Promise<User | null> {
    return this.usersService.update(id, user);
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiNoContentResponse({
    description: 'Delete a user by ID'
  })
  delete(@Param('id') id: string) {
    this.usersService.delete(id);
  }
}