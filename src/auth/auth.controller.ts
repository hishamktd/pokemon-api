import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() body: { email: string; password: string },
    @Res() res: Response,
  ) {
    const { email, password } = body;
    const result = await this.authService.login(email, password);

    if (!result.success) {
      return res.status(400).json({ error: result.error });
    }

    return res.status(200).json({ token: result.token });
  }

  @Post('register')
  async register(
    @Body() body: { email: string; password: string },
    @Res() res: Response,
  ) {
    const { email, password } = body;
    const result = await this.authService.register(email, password);

    if (!result.success) {
      return res.status(400).json({ error: result.error });
    }

    return res.status(201).json({ token: result.token });
  }

  @Post('logout')
  async logout(@Body() body: { token: string }, @Res() res: Response) {
    await this.authService.logout(body.token);
    return res.status(200).json({ success: true });
  }
}
