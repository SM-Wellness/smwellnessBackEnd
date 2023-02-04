import { PartialType } from '@nestjs/swagger';
import { UpdateBoardsParamDto } from './update-boards-request.dto';

export class DeleteBoardsParamDto extends PartialType(UpdateBoardsParamDto) {}
