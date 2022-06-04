import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AdminGuard } from 'src/auth/admin.guard';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { ClassPack } from './classpack.entity';
import { ClasspacksService } from './classpacks.service';
import { CreateClassPackDto } from './dto/create-classpack.dto';

@Controller('api/classpacks')
@UseGuards(AuthGuard())
export class ClasspacksController {
  constructor(private classpacksService: ClasspacksService) {}

  @Get()
  getClassPacks(): Promise<ClassPack[]> {
    return this.classpacksService.getClassPacks();
  }

  @Post()
  @UseGuards(AdminGuard)
  createClassPack(
    @Body() createClassPackDto: CreateClassPackDto,
    @GetUser() user: User,
  ): Promise<ClassPack> {
    return this.classpacksService.createClassPack(createClassPackDto, user);
  }
}
