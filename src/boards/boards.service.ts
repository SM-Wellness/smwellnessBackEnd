import { ForbiddenException, Injectable } from '@nestjs/common';
import { BoardsRepository } from './boards.repository';
import { CreateBoardsRequestDto } from './dto/create-boards-request.dto';
import { UpdateBoardsDto } from './dto/update-boards-request.dto';

@Injectable()
export class BoardsService {
  constructor(private readonly boardsRepository: BoardsRepository) {}

  async create(userId: number, createBoardsDto: CreateBoardsRequestDto) {
    const createData = {
      userId,
      title: createBoardsDto.title,
      contents: createBoardsDto.contents,
      imgUrl: createBoardsDto.imgUrl,
    };

    return this.boardsRepository.create(createData);
  }

  findMany() {
    return this.boardsRepository.findMany();
  }

  findById(id: number) {
    return this.boardsRepository.findById(id);
  }

  async update(id: number, userId: number, updateBoardsDto: UpdateBoardsDto) {
    const board = await this.findById(id);

    if (userId !== board.userId) {
      throw new ForbiddenException('게시글의 소유자만 수정할 수 있습니다.');
    }
    return this.boardsRepository.update(id, updateBoardsDto);
  }

  async delete(id: number, userId: number) {
    const board = await this.findById(id);

    if (userId !== board.userId) {
      throw new ForbiddenException('게시글의 소유자만 삭제할 수 있습니다.');
    }
    return this.boardsRepository.delete(id);
  }
}
