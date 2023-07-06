import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { RocketsService } from './rockets.service';
import { CreateRocketDto } from './dto/create-rocket.dto';
import { UpdateRocketDto } from './dto/update-rocket.dto';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Rockets')
@Controller('rockets')
export class RocketsController {
  constructor(private readonly rocketsService: RocketsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('img'))
  create(@Body() createRocketDto: CreateRocketDto, @UploadedFile() img) {
    return this.rocketsService.create(createRocketDto, img);
  }

  @Get()
  findAll() {
    return this.rocketsService.findAll();
  }

  @Get('/by-country')
  findByCountry(@Query('country') country: number) {
    return this.rocketsService.findByCountry(country);
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
