import { applyDecorators, Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

export const DummyControllerDecorator = () =>
  applyDecorators(
    Controller({ path: '/dummy', version: ['1'] }),
    ApiTags('DummyData'),
  );

export const GetDummyData = () =>
  applyDecorators(
    Get('/'),
    ApiOperation({
      summary: '더미 데이터 전체 조회 API',
    }),
  );
