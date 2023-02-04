import {
  applyDecorators,
  Controller,
  Delete,
  Get,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuth } from '@app/utils/guards/jwt-auth.guard';

export const UserHealthInfoController = () =>
  applyDecorators(
    Controller({ path: '/user-health-info', version: ['1'] }),
    ApiTags('UserHealthInfo'),
  );

export const CreateUserHealthInfo = () =>
  applyDecorators(
    Post('/'),
    JwtAuth(),
    ApiOperation({
      summary: '유저 건상 정보 생성 API',
    }),
  );

export const GetUserHealthInfo = () =>
  applyDecorators(
    Get('/'),
    JwtAuth(),
    ApiOperation({
      summary: '유저 건강 정보 조회 API',
    }),
  );

export const UpdateUserHealthInfo = () =>
  applyDecorators(
    Put('/'),
    JwtAuth(),
    ApiOperation({
      summary: '유저 건강 정보 변경 API',
    }),
  );

export const DeleteUserHealthInfo = () =>
  applyDecorators(
    Delete('/'),
    JwtAuth(),
    ApiOperation({
      summary: '유저 건강 정보 삭제 API',
    }),
  );
