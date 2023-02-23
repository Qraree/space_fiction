import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Rocket extends Model {
  @Column
  name: string;

  @Column
  img: string;
}
