import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';

@Injectable()
export class DummyService {
  constructor(private readonly prisma: PrismaService) {}

  getDummy() {
    return this.prisma.dummyData.findMany();
  }
}
