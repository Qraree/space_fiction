import { Injectable } from '@nestjs/common';
import { CreateRocketDto } from './dto/create-rocket.dto';
import { UpdateRocketDto } from './dto/update-rocket.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Rocket } from './entities/rocket.entity';

@Injectable()
export class RocketsService {
  constructor(@InjectModel(Rocket) private rocketModel: typeof Rocket) {}

  async create(createRocketDto: CreateRocketDto) {
    try {
      const rocket = await this.rocketModel.create({
        name: createRocketDto.name,
        img: createRocketDto.img,
      });
      return 'Rocket was added';
    } catch (e) {
      console.log(e);
    }
  }

  findAll() {
    return `This action returns all rockets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rocket`;
  }

  update(id: number, updateRocketDto: UpdateRocketDto) {
    return `This action updates a #${id} rocket`;
  }

  remove(id: number) {
    return `This action removes a #${id} rocket`;
  }
}
