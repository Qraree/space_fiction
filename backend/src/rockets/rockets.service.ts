import { Injectable } from '@nestjs/common';
import { CreateRocketDto } from './dto/create-rocket.dto';
import { UpdateRocketDto } from './dto/update-rocket.dto';

@Injectable()
export class RocketsService {
  create(createRocketDto: CreateRocketDto) {
    return 'This action adds a new rocket';
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
