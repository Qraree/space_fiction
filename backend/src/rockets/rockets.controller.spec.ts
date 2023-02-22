import { Test, TestingModule } from '@nestjs/testing';
import { RocketsController } from './rockets.controller';
import { RocketsService } from './rockets.service';

describe('RocketsController', () => {
  let controller: RocketsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RocketsController],
      providers: [RocketsService],
    }).compile();

    controller = module.get<RocketsController>(RocketsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
