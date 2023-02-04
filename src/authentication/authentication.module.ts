import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TokenModule } from './token/token.module';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [AuthModule, TokenModule],
  providers: [JwtStrategy],
})
export class AuthenticationModule {}
