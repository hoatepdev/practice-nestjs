import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  Body,
  Query,
  UsePipes,
  ValidationPipe,
  ParseBoolPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('sortDesc', ParseBoolPipe) sortBy: boolean) {
    return [
      {
        username: 'hoatep',
        email: 'hoa@gmail.com',
      },
    ];
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
  }

  @Get(':id/:postId')
  getUserById(@Param('id') id: string, @Param('postId') postId: string) {
    console.log('postId', id, postId);
    return { id, postId };
  }
}
