import { Module } from '@nestjs/common';
import { RocketsService } from './rockets.service';
import { RocketsController } from './rockets.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Rocket } from './entities/space-rocket.entity';
import { RocketsCountry } from '../rockets-country/entities/rockets-country.entity';
import { FilesModule } from '../files/files.module';

@Module({
  controllers: [RocketsController],
  providers: [RocketsService],
  imports: [SequelizeModule.forFeature([Rocket, RocketsCountry]), FilesModule],
})
export class RocketsModule {}
