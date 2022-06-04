import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClassPack } from './classpack.entity';
import { CreateClassPackDto } from './dto/create-classpack.dto';

@Injectable()
export class ClasspacksService {
  constructor(
    @InjectRepository(ClassPack)
    private classpacksRepository: Repository<ClassPack>,
  ) {}

  getClassPacks(): Promise<ClassPack[]> {
    return this.classpacksRepository.find();
  }

  createClassPack(createClassPackDto: CreateClassPackDto): Promise<ClassPack> {
    const classPack = this.classpacksRepository.create(createClassPackDto);
    return this.classpacksRepository.save(classPack);
  }
}
