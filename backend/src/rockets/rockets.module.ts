import { Module } from '@nestjs/common';
import { RocketsService } from './rockets.service';
import { RocketsController } from './rockets.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Rocket } from './entities/rocket.entity';

@Module({
  controllers: [RocketsController],
  providers: [RocketsService],
  imports: [SequelizeModule.forFeature([Rocket])],
})
export class RocketsModule {}
