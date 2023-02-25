import { Injectable } from '@nestjs/common';
import { CreateRocketsCountryDto } from './dto/create-rockets-country.dto';
import { UpdateRocketsCountryDto } from './dto/update-rockets-country.dto';
import { InjectModel } from '@nestjs/sequelize';
import { RocketsCountry } from './entities/rockets-country.entity';
import { FilesService } from '../files/files.service';

@Injectable()
export class RocketsCountryService {
  constructor(
    @InjectModel(RocketsCountry)
    private rocketCountryModel: typeof RocketsCountry,
    private fileService: FilesService,
  ) {}
  async create(createRocketsCountryDto: CreateRocketsCountryDto, flag) {
    const fileName = await this.fileService.createFile(flag);
    const countryRocket = { ...createRocketsCountryDto, flag: fileName };
    return await this.rocketCountryModel.create({
      ...createRocketsCountryDto,
      flag: fileName,
    });
  }

  async findAll() {
    console.log('Get all countries');
    return await this.rocketCountryModel.findAll();
  }

  async findOne(id: number) {
    return await this.rocketCountryModel.findAll({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateRocketsCountryDto: UpdateRocketsCountryDto) {
    return `This action updates a #${id} rocketsCountry`;
  }

  async remove(id: number) {
    return await this.rocketCountryModel.destroy({
      where: {
        id: id,
      },
    });
  }
}
