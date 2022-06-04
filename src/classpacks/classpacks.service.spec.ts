import { Test, TestingModule } from '@nestjs/testing';
import { ClasspacksService } from './classpacks.service';

describe('ClasspacksService', () => {
  let service: ClasspacksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClasspacksService],
    }).compile();

    service = module.get<ClasspacksService>(ClasspacksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
