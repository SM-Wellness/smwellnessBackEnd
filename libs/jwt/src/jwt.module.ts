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
        secret: "test",
        signOptions: {
          expiresIn:"1d",
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
