import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RocketsModule } from './rockets/rockets.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Rocket } from './rockets/entities/rocket.entity';

@Module({
  imports: [
    RocketsModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: parseInt(process.env.POSTGRES_PORT) || 5432,
      username: 'postgres',
      password: 'root',
      database: 'spaceFiction',
      models: [Rocket],
      autoLoadModels: true,
    }),
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
