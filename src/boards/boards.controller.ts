import { Body, Param } from '@nestjs/common';

import { User } from '@app/utils/users.decorator';
import { BoardsService } from './boards.service';

import {
  BoardsController as Controller,
  UpdateBoards,
  DeleteBoards,
  GetBoards,
  GetBoard,
  CreateBoard,
} from './boards.controller.decorator';
import { UserRequestDto } from '../shared/dto/user-request.dto';
import { CreateBoardsRequestDto } from './dto/create-boards-request.dto';
import {
  UpdateBoardsDto,
  UpdateBoardsParamDto,
} from './dto/update-boards-request.dto';
import { DeleteBoardsParamDto } from './dto/delete-boards-request.dto';

@Controller()
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @CreateBoard()
  async create(
    @User() { userId }: UserRequestDto,
    @Body() createBoardsDto: CreateBoardsRequestDto,
  ) {
    await this.boardsService.create(userId, createBoardsDto);

    return null;
  }

  @GetBoards()
  findMany() {
    return this.boardsService.findMany();
  }

  @GetBoard()
  findById(@Param('boardId') id: string) {
    return this.boardsService.findById(+id);
  }

  @UpdateBoards()
  update(
    @Param() updateBoardsParamDto: UpdateBoardsParamDto,
    @User() { userId }: UserRequestDto,
    @Body() body: UpdateBoardsDto,
  ) {
    return this.boardsService.update(
      +updateBoardsParamDto.boardId,
      userId,
      body,
    );
  }

  @DeleteBoards()
  delete(
    @Param() deleteBoardsParamDto: DeleteBoardsParamDto,
    @User() { userId }: UserRequestDto,
  ) {
    return this.boardsService.delete(+deleteBoardsParamDto.boardId, userId);
  }
}
