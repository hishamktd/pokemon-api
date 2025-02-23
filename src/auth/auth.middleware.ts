import { Request, Response, NextFunction } from 'express';

import { Injectable, NestMiddleware } from '@nestjs/common';

import { AuthService } from './auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: 'Unauthorized: No token provided' });
    }

    try {
      const user = await this.authService.verifyToken(token);
      if (!user) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
      }
      req.user = user;
      next();
    } catch (error: unknown) {
      console.error(error);
      return res
        .status(401)
        .json({ message: 'Unauthorized: Token verification failed' });
    }
  }
}
