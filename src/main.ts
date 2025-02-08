import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.PORT ?? 3000, () => {
    console.log(`Server started on port ${process.env.PORT ?? 3000}`);
  });

  app.enableCors({ origin: '*' });

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
}
bootstrap().catch((err) => console.error(err));

export default bootstrap;
