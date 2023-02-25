import { PartialType } from '@nestjs/swagger';
import { CreateRocketDto } from './create-rocket.dto';

export class UpdateRocketDto extends PartialType(CreateRocketDto) {}
