import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env' ?? `${process.env.PATH_ENV}`,
      load: [configuration],
    }),
  ],
})
export class ConfigInternModule {}
