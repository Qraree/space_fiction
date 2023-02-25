import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { RocketsCountryService } from './rockets-country.service';
import { CreateRocketsCountryDto } from './dto/create-rockets-country.dto';
import { UpdateRocketsCountryDto } from './dto/update-rockets-country.dto';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags("Rocket's countries")
@Controller('rockets-country')
export class RocketsCountryController {
  constructor(private readonly rocketsCountryService: RocketsCountryService) {}

  @Post()
  @UseInterceptors(FileInterceptor('flag'))
  create(
    @Body() createRocketsCountryDto: CreateRocketsCountryDto,
    @UploadedFile() flag,
  ) {
    return this.rocketsCountryService.create(createRocketsCountryDto, flag);
  }

  @Get()
  findAll() {
    return this.rocketsCountryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rocketsCountryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRocketsCountryDto: UpdateRocketsCountryDto,
  ) {
    return this.rocketsCountryService.update(+id, updateRocketsCountryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rocketsCountryService.remove(+id);
  }
}
