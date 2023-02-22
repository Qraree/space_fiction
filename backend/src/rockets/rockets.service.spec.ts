import { Test, TestingModule } from '@nestjs/testing';
import { RocketsService } from './rockets.service';

describe('RocketsService', () => {
  let service: RocketsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RocketsService],
    }).compile();

    service = module.get<RocketsService>(RocketsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
