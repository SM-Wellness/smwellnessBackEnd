import { ApiProperty } from '@nestjs/swagger';

export class CreateBoardsRequestDto {
  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly contents: string;

  @ApiProperty()
  readonly imgUrl: string;
}
