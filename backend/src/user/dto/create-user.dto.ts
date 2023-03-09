import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'ivanov@gmail.com', description: "User's email" })
  readonly email: string;
  @ApiProperty({ example: 'ivanov04', description: "User's name" })
  readonly username: string;
  @ApiProperty({ example: 'qwerty123', description: "User's password" })
  password: string;
}
