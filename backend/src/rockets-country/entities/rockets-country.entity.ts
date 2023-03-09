import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Rocket } from '../../rockets/entities/space-rocket.entity';

@Table({ tableName: 'RocketsCountries' })
export class RocketsCountry extends Model {
  @ApiProperty({ example: 'Russia', description: "Country's name" })
  @Column
  name: string;

  @ApiProperty({ example: '1', description: 'path to flag image' })
  @Column
  flag: string;

  @HasMany(() => Rocket)
  rockets: Rocket[];
}
