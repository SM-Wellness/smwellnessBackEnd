import { JwtAuth } from '@app/utils/guards';
import {
  applyDecorators,
  Controller,
  Delete,
  Get,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

export const BoardsController = () =>
  applyDecorators(
    Controller({ path: '/boards', version: ['1'] }),
    ApiTags('boards'),
  );

export const CreateBoard = () =>
  applyDecorators(
    Post('/'),
    JwtAuth(),
    ApiOperation({
      summary: '게시글 생성 API',
    }),
  );

export const GetBoards = () =>
  applyDecorators(
    Get('/'),
    ApiOperation({
      summary: '게시글 리스트 조회',
    }),
  );

export const GetBoard = () =>
  applyDecorators(
    Get('/:boardId'),
    ApiOperation({
      summary: '게시글 상세 조회',
    }),
  );

export const UpdateBoards = () =>
  applyDecorators(
    Put('/:boardId'),
    JwtAuth(),
    ApiOperation({
      summary: '게시글 업데이트 API',
    }),
  );

export const DeleteBoards = () =>
  applyDecorators(
    Delete('/:boardId'),
    JwtAuth(),
    ApiOperation({
      summary: '게시글 삭제 API',
    }),
  );
