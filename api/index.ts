import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { INestApplication, ValidationPipe } from '@nestjs/common';

let app: INestApplication;

async function bootstrap() {
  if (!app) {
    app = await NestFactory.create(AppModule);

    app.enableCors({
      origin: 'https://pokemon-cards-alpha-five.vercel.app',
      methods: 'GET, HEAD, POST, PUT, DELETE, PATCH, OPTIONS',
      credentials: true,
    });

    await app.init();

    app.useGlobalPipes(new ValidationPipe({ transform: true }));
  }
  return app;
}

export default async (req: VercelRequest, res: VercelResponse) => {
  const app = await bootstrap();
  const server = app.getHttpAdapter().getInstance() as (
    req: VercelRequest,
    res: VercelResponse,
  ) => void;
  return server(req, res);
};
