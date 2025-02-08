import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth.controller';
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
  providers: [AuthService, UserRepository, SessionRepository],
  controllers: [AuthController],
})
export class AuthModule {}
