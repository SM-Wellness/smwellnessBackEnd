import { Module } from '@nestjs/common';
import { UserHealthInfoController } from './user-health-info.controller';
import { UserHealthInfoService } from './user-health-info.service';
import { UsersModule } from '../users/users.module';
import { UserHealthInfoRepository } from './user-health-info.repository';

@Module({
  imports: [UsersModule],
  controllers: [UserHealthInfoController],
  providers: [UserHealthInfoService, UserHealthInfoRepository],
})
export class UserHealthInfoModule {}
