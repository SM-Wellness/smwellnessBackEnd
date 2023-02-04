import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

import { UsersError } from './error';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  create(data: Prisma.UserUncheckedCreateInput) {
    return this.usersRepository.create(data);
  }

  async getUserByEmailWithValidate(email: string): Promise<User> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException(UsersError.NOT_FOUND_USER);
    }

    return user;
  }

  async findById(id: number) {
    return this.usersRepository.findById(id);
  }
}
