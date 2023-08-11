import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const PORT = process.env.PORT || 3000;
  app.use(
    '/static-files',
    express.static(join(__dirname, '..', 'static-files')),
  );

  const config = new DocumentBuilder()
    .setTitle('Space Fiction')
    .setDescription('Space Fiction API docs')
    .setVersion('1.0.0')
    .addTag('SF')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => console.log(`Server started on ${PORT} port`));
}

bootstrap();
