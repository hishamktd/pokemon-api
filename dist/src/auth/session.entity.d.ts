import { User } from './user.entity';
export declare class Session {
    id: number;
    token: string;
    expiresAt: Date;
    user: User;
    userId: number;
}
