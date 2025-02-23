import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth.controller';
import { AuthMiddleware } from './auth.middleware';
import { AuthService } from './auth.service';
import { Session } from './session.entity';
import { SessionRepository } from './session.repository';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Session]),
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY ?? 'your-secret-key',
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AuthService, UserRepository, SessionRepository, AuthMiddleware],
  controllers: [AuthController],
  exports: [AuthMiddleware, AuthService],
})
export class AuthModule {}
