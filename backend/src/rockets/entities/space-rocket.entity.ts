import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { RocketsCountry } from '../../rockets-country/entities/rockets-country.entity';

interface createRocketAttrs {
  name: string;
  img: string;
  rocketCountryId: number;
}

@Table({ tableName: 'spaceRockets' })
export class Rocket extends Model<Rocket, createRocketAttrs> {
  @ApiProperty({ example: '1', description: "Rocket's id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '8K-99', description: "Rocket's name" })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({
    example: '/static/images/8K-99.jpg',
    description: "path to rocket's image",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  img: string;

  @ApiProperty({ example: '2', description: "Rocket's origin country id" })
  @ForeignKey(() => RocketsCountry)
  @Column({ type: DataType.INTEGER })
  rocketCountryId: number;

  @BelongsTo(() => RocketsCountry)
  rocketsCountry: RocketsCountry;
}
