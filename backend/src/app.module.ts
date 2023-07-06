import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RocketsCountryModule } from './rockets-country/rockets-country.module';
import { RocketsCountry } from './rockets-country/entities/rockets-country.entity';
import { FilesService } from './files/files.service';
import { FilesModule } from './files/files.module';
import { RocketsModule } from './rockets/rockets.module';
import { Rocket } from './rockets/entities/space-rocket.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UserModule } from './user/user.module';
import * as path from 'path';
import { User } from './user/entities/user.entity';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/entities/role.entity';
import { UserRoles } from './roles/entities/userRole.entity';
import { StorageModule } from './storage/storage.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      models: [RocketsCountry, Rocket, User, Role, UserRoles],
      autoLoadModels: true,
    }),
    RocketsCountryModule,
    FilesModule,
    RocketsModule,
    UserModule,
    RolesModule,
    StorageModule,
  ],
  controllers: [AppController],
  providers: [AppService, FilesService],
})
export class AppModule {}
