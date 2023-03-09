import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RocketsCountryService } from './rockets-country.service';
import { RocketsCountryController } from './rockets-country.controller';
import { RocketsCountry } from './entities/rockets-country.entity';
import { Rocket } from '../rockets/entities/space-rocket.entity';
import { FilesModule } from '../files/files.module';

@Module({
  controllers: [RocketsCountryController],
  providers: [RocketsCountryService],
  imports: [SequelizeModule.forFeature([RocketsCountry, Rocket]), FilesModule],
})
export class RocketsCountryModule {}
