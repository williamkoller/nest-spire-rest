import { Module } from '@nestjs/common';
import { ConfigInternModule } from './config/config-intern.module';

@Module({
  imports: [ConfigInternModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
