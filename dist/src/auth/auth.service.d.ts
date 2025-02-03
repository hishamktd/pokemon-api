import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from './user.entity';
import { Session } from './session.entity';
export declare class AuthService {
    private usersRepository;
    private sessionsRepository;
    private jwtService;
    constructor(usersRepository: Repository<User>, sessionsRepository: Repository<Session>, jwtService: JwtService);
    login(email: string, password: string): Promise<{
        success: boolean;
        error: string;
        token?: undefined;
    } | {
        success: boolean;
        token: string;
        error?: undefined;
    }>;
    register(email: string, password: string): Promise<{
        success: boolean;
        error: string;
        token?: undefined;
    } | {
        success: boolean;
        token: string;
        error?: undefined;
    }>;
    createSession(userId: number): Promise<string>;
    logout(token: string): Promise<void>;
    verifyToken(token: string): Promise<User | null>;
}
