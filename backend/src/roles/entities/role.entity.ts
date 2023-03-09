import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../user/entities/user.entity';
import { UserRoles } from './userRole.entity';

interface createRoleAttrs {
  value: string;
  description: string;
  canEdit: boolean;
  canBan: boolean;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, createRoleAttrs> {
  @ApiProperty({ example: '1', description: "Rocket's id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'Unique role value' })
  @Column({ type: DataType.STRING, allowNull: false })
  value: string;

  @ApiProperty({
    example: 'Administrator',
    description: "Role's description",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @ApiProperty({
    example: 'False',
    description: 'Can user edit website pages',
  })
  @Column({ type: DataType.BOOLEAN, allowNull: false })
  canEdit: boolean;

  @ApiProperty({ example: 'True', description: 'Can user ban other users' })
  @Column({ type: DataType.BOOLEAN, allowNull: false })
  canBan: boolean;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
