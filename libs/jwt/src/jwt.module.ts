import { Global, Module } from '@nestjs/common';
import { JwtModule as Jwt, JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';

require('dotenv').config();

@Global()
@Module({
  imports: [
    Jwt.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
<<<<<<< HEAD
        secret:"test",
=======
        secret: configService.get('ACCESS_TOKEN_SECRET_KEY'),
>>>>>>> parent of a30d906 (mola)
        signOptions: {
          expiresIn: configService.get('ACCESS_TOKEN_EXPIRATION_TIME'),
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
