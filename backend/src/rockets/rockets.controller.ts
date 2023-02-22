import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RocketsService } from './rockets.service';
import { CreateRocketDto } from './dto/create-rocket.dto';
import { UpdateRocketDto } from './dto/update-rocket.dto';

@Controller('rockets')
export class RocketsController {
  constructor(private readonly rocketsService: RocketsService) {}

  @Post()
  create(@Body() createRocketDto: CreateRocketDto) {
    return this.rocketsService.create(createRocketDto);
  }

  @Get()
  findAll() {
    return this.rocketsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rocketsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRocketDto: UpdateRocketDto) {
    return this.rocketsService.update(+id, updateRocketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rocketsService.remove(+id);
  }
}
