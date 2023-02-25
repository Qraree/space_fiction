import { PartialType } from '@nestjs/mapped-types';
import { CreateRocketsCountryDto } from './create-rockets-country.dto';

export class UpdateRocketsCountryDto extends PartialType(
  CreateRocketsCountryDto,
) {}
