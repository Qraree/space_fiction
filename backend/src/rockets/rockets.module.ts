import { Module } from '@nestjs/common';
import { RocketsService } from './rockets.service';
import { RocketsController } from './rockets.controller';

@Module({
  controllers: [RocketsController],
  providers: [RocketsService],
})
export class RocketsModule {}
