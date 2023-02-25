import { Injectable } from '@nestjs/common';
import { CreateRocketDto } from './dto/create-rocket.dto';
import { UpdateRocketDto } from './dto/update-rocket.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Rocket } from './entities/rocket.entity';
import { FilesService } from '../files/files.service';

@Injectable()
export class RocketsService {
  constructor(
    @InjectModel(Rocket) private rocketModel: typeof Rocket,
    private fileService: FilesService,
  ) {}
  async create(createRocketDto: CreateRocketDto, img: any) {
    const fileName = await this.fileService.createFile(img);
    const rocket = { ...createRocketDto, img: fileName };
    console.log(rocket);
    return await this.rocketModel.create(rocket);
  }

  async findAll() {
    return await this.rocketModel.findAll();
  }

  async findOne(id: number) {
    return await this.rocketModel.findAll({
      where: {
        id: id,
      },
    });
  }

  async findByCountry(id: number) {
    return await this.rocketModel.findAll({
      where: {
        rocketCountryId: id,
      },
    });
  }

  update(id: number, updateRocketDto: UpdateRocketDto) {
    return `This action updates a #${id} rocket`;
  }

  async remove(id: number) {
    return await this.rocketModel.destroy({
      where: {
        id: id,
      },
    });
  }
}
