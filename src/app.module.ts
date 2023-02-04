import { Module } from '@nestjs/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@app/prisma';
import { JwtModule } from '@app/jwt';
import { UserHealthInfoModule } from './user-health-info/user-health-info.module';
import { BoardsModule } from './boards/boards.module';
import { DummyModule } from './dummy/dummy.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`environments/.${process.env.NODE_ENV}.env`],
      isGlobal: true,
    }),
    AuthenticationModule,
    UsersModule,
    PrismaModule,
    JwtModule,
    UserHealthInfoModule,
    BoardsModule,
    DummyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
