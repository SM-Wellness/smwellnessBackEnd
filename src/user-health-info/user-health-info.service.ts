import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserHealthInfoRepository } from './user-health-info.repository';
import { UsersService } from '../users/users.service';
import { CreateUserHealthInfoRequestDto } from './dto/create-user-health-info-Request.dto';
import { UpdateUserHealthInfoRequestDto } from './dto/update-user-health-info-request.dto';

@Injectable()
export class UserHealthInfoService {
  constructor(
    private readonly userHealthInfoRepository: UserHealthInfoRepository,
    private readonly usersService: UsersService,
  ) {}

  async createProfile(
    id: number,
    createUserHealthInfoDto: CreateUserHealthInfoRequestDto,
  ) {
    const userId = await this.usersService.findById(id);

    if (!userId) {
      throw new ForbiddenException(
        '존재하지 않는 사용자의 프로필을 생성할 수 없습니다.',
      );
    }

    const createData = {
      userId: userId.id,
      smoking: createUserHealthInfoDto.smoking,
      alcohol: createUserHealthInfoDto.alcohol,
      bigThree: createUserHealthInfoDto.bigThree,
      bmi: createUserHealthInfoDto.bmi,
      sugarLevel: createUserHealthInfoDto.sugarLevel,
      bloodPressure: createUserHealthInfoDto.bloodPressure,
      todayCalorie: createUserHealthInfoDto.todayCalorie,
      todayWater: createUserHealthInfoDto.todayWater,
      todaySteps: createUserHealthInfoDto.todaySteps,
      liverLevels: createUserHealthInfoDto.liverLevels,
    };

    return this.userHealthInfoRepository.createHealthInfo(createData);
  }

  async findByUserId(userId: number) {
    return this.userHealthInfoRepository.findByUserId(userId);
  }

  async update(
    userId: number,
    updateUserHealthInfoDto: UpdateUserHealthInfoRequestDto,
  ) {
    const updateId = await this.findByUserId(userId);

    if (!updateId && !userId) {
      throw new ForbiddenException(
        '존재하지 않는 사용자 혹은 프로필을 변경할 수 없습니다.',
      );
    }

    return this.userHealthInfoRepository.update(
      updateId.id,
      updateUserHealthInfoDto,
    );
  }
}
