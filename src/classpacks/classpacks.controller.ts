import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClassPack } from './classpack.entity';
import { ClasspacksService } from './classpacks.service';
import { CreateClassPackDto } from './dto/create-classpack.dto';

@Controller('api/classpacks')
export class ClasspacksController {
  constructor(private classpacksService: ClasspacksService) {}

  @Get()
  getClassPacks(): Promise<ClassPack[]> {
    return this.classpacksService.getClassPacks();
  }

  @Post()
  createClassPack(
    @Body() createClassPackDto: CreateClassPackDto,
  ): Promise<ClassPack> {
    return this.classpacksService.createClassPack(createClassPackDto);
  }
}
