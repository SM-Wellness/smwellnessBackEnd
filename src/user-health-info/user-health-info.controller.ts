import {
  CreateUserHealthInfo,
  GetUserHealthInfo,
  UpdateUserHealthInfo,
  UserHealthInfoController as Controller,
} from './user-health-info.controller.decorator';
import { Body } from '@nestjs/common';
import { User } from '@app/utils/users.decorator';
import { UserRequestDto } from '../shared/dto/user-request.dto';
import { UserHealthInfoService } from './user-health-info.service';
import { CreateUserHealthInfoRequestDto } from './dto/create-user-health-info-Request.dto';
import { UpdateUserHealthInfoRequestDto } from './dto/update-user-health-info-request.dto';

@Controller()
export class UserHealthInfoController {
  constructor(private readonly userHealthInfoService: UserHealthInfoService) {}

  @CreateUserHealthInfo()
  async createUserHealthInfo(
    @User() { userId }: UserRequestDto,
    @Body() createUserHealthInfoDto: CreateUserHealthInfoRequestDto,
  ) {
    await this.userHealthInfoService.createProfile(
      userId,
      createUserHealthInfoDto,
    );

    return null;
  }

  @GetUserHealthInfo()
  async findByProfile(@User() { userId }: UserRequestDto) {
    return this.userHealthInfoService.findByUserId(userId);
  }

  @UpdateUserHealthInfo()
  async update(
    @User() { userId }: UserRequestDto,
    @Body() updateUserHealthInfoDto: UpdateUserHealthInfoRequestDto,
  ) {
    return this.userHealthInfoService.update(userId, updateUserHealthInfoDto);
  }
}
