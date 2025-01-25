import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User } from './user.entity';
import { Session } from './session.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Session)
    private sessionsRepository: Repository<Session>,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (!user) {
      return { success: false, error: 'user_not_found' };
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return { success: false, error: 'invalid_credentials' };
    }

    const token = await this.createSession(user.id);
    return { success: true, token };
  }

  async register(email: string, password: string) {
    const existingUser = await this.usersRepository.findOne({
      where: { email },
    });
    if (existingUser) {
      return { success: false, error: 'User already exists' };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.usersRepository.create({
      email,
      password: hashedPassword,
    });

    await this.usersRepository.save(user);

    const token = await this.createSession(user.id);
    return { success: true, token };
  }

  async createSession(userId: number): Promise<string> {
    const token = await this.jwtService.signAsync({ userId });
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

    await this.sessionsRepository.save({
      token,
      expiresAt,
      userId,
      user: { id: userId },
    });

    return token;
  }

  async logout(token: string) {
    await this.sessionsRepository.delete({ token });
  }

  async verifyToken(token: string): Promise<User | null> {
    const session = await this.sessionsRepository.findOne({
      where: { token },
      relations: ['user'],
    });
    if (!session) {
      return null;
    }
    return session.user;
  }
}
