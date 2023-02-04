import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateBoardsRequestDto } from './create-boards-request.dto';

export class UpdateBoardsDto extends PartialType(CreateBoardsRequestDto) {}

export class UpdateBoardsParamDto {
  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  readonly boardId: number;
}
