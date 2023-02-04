import { PrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class BoardsRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(boardsCreateInput: Prisma.BoardsUncheckedCreateInput) {
    return this.prisma.boards.create({ data: boardsCreateInput });
  }

  findMany() {
    return this.prisma.boards.findMany();
  }

  findById(id: number) {
    return this.prisma.boards.findUnique({ where: { id: id } });
  }

  update(id: number, boardsUpdateInput: Prisma.BoardsUncheckedUpdateInput) {
    return this.prisma.boards.update({
      where: { id: id },
      data: boardsUpdateInput,
    });
  }

  delete(id: number) {
    return this.prisma.boards.delete({
      where: { id: id },
    });
  }
}
