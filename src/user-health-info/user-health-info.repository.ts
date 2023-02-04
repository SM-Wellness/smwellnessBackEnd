import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserHealthInfoRepository {
  constructor(private readonly prisma: PrismaService) {}

  createHealthInfo(
    userHealthInfoInput: Prisma.UserHealthInfoUncheckedCreateInput,
  ) {
    return this.prisma.userHealthInfo.create({ data: userHealthInfoInput });
  }

  findByUserId(userId: number) {
    return this.prisma.userHealthInfo.findUnique({ where: { userId } });
  }

  update(
    id: number,
    userHealthInfoUpdateInput: Prisma.UserHealthInfoUpdateInput,
  ) {
    return this.prisma.userHealthInfo.update({
      where: { id },
      data: userHealthInfoUpdateInput,
    });
  }
}
