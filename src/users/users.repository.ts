import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

import { PrismaService } from '@app/prisma';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: Prisma.UserUncheckedCreateInput): Promise<User> {
    return this.prismaService.user.create({
      data,
    });
  }

  findByEmail(email: string): Promise<User | null> {
    return this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }

  findById(id: number) {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
  }
}
