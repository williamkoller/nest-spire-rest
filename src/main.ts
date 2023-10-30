import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger } from '@nestjs/common';
import { envs } from './config/envs';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const port = envs(app).port;
  const nodeEnv = envs(app).nodeEnv;

  await app.listen(port, () =>
    logger.log(`Server started on port ${port} and running on mode ${nodeEnv}`),
  );
}
bootstrap();
