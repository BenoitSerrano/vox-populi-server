import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
  async login(): Promise<User> {
    return new User();
  }
}
