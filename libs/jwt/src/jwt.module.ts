import { Global, Module } from '@nestjs/common';
import { JwtModule as Jwt, JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';

@Global()
@Module({
  imports: [
    Jwt.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: "ACCESS_TOKEN_SECRET_KEY",
        signOptions: {
          expiresIn:"ACCESS_TOKEN_EXPIRATION_TIME",
        },
      }),
    }),
  ],
  providers: [
    {
      provide: 'JwtService',
      useExisting: JwtService,
    },
  ],
  exports: ['JwtService'],
})
export class JwtModule {}
