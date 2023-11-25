import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { CreateUserType } from 'src/users/utils/type';

@Injectable()
export class UsersService {
  private fakeUsers = [
    {
      username: 'hoatepdev',
      email: 'hoatepdev@gmail.com',
    },
    {
      username: 'hoatep',
      email: 'hoatep@gmail.com',
    },
    {
      username: 'hoadeptrai',
      email: 'hoadeptrai@gmail.com',
    },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }
  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }
  fetchUserById(id: number) {
    return {
      id,
      username: 'Hoanguyentran',
      email: 'hoanguyentran@gmail.com',
    };
  }
}
