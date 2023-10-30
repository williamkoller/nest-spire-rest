import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';

export const envs = (app: NestExpressApplication) => ({
  port: app.get<ConfigService>(ConfigService).get<number>('port'),
  nodeEnv: app.get<ConfigService>(ConfigService).get<string>('nodeEnv'),
});
