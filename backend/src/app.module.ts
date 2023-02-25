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
import { Rocket } from './rockets/entities/rocket.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

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
      models: [RocketsCountry, Rocket],
      autoLoadModels: true,
    }),
    RocketsCountryModule,
    FilesModule,
    RocketsModule,
  ],
  controllers: [AppController],
  providers: [AppService, FilesService],
})
export class AppModule {}
