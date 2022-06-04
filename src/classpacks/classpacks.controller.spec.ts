import { Test, TestingModule } from '@nestjs/testing';
import { ClasspacksController } from './classpacks.controller';

describe('ClasspacksController', () => {
  let controller: ClasspacksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClasspacksController],
    }).compile();

    controller = module.get<ClasspacksController>(ClasspacksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
