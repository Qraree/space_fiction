import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { MinioModule } from 'nestjs-minio-client';
import { config } from './config';

@Module({
  providers: [StorageService],
  exports: [StorageService],
  imports: [
    MinioModule.register({
      endPoint: config.MINIO_ENDPOINT,
      port: config.MINIO_PORT,
      useSSL: false,
      accessKey: config.MINIO_ACCESSKEY,
      secretKey: config.MINIO_SECRETKEY,
    }),
  ],
})
export class StorageModule {}
