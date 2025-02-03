import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

const server: express.Express = express();

export const createNestApp = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  return app;
};

createNestApp(server)
  .then((app) => app.init())
  .catch((err) => console.error('Nest broken', err));

export default server;
