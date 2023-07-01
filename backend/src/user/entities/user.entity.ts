import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { RocketsCountry } from '../../rockets-country/entities/rockets-country.entity';
import { Role } from '../../roles/entities/role.entity';
import { UserRoles } from '../../roles/entities/userRole.entity';

interface UserCreationAttrs {
  email: string;
  username: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: 'ivanov@gdmail.comm', description: "User'fs email" })
  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @ApiProperty({
    example: 'Ivanov04',
    description: "User's username",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  username: string;

  @ApiProperty({ example: 'qwerty123', description: "User's password" })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: 'False', description: 'Is user banned' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isBanned: boolean;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
