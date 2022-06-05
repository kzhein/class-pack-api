import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AdminGuard } from 'src/auth/admin.guard';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { ClasspacksService } from './classpacks.service';
import { CreateClassPackDto } from './dto/create-classpack.dto';

@Controller('api/classpacks')
@UseGuards(AuthGuard())
export class ClasspacksController {
  constructor(private classpacksService: ClasspacksService) {}

  @Get()
  async getClassPacks(@GetUser() user: User) {
    const classPacks = await this.classpacksService.getClassPacks();

    return {
      errorCode: 0,
      message: 'Success',
      data: {
        total_item: classPacks.length,
        total_page: 1,
        mem_tier: user.tier,
        total_expired_class: 0,
        pack_list: classPacks,
      },
    };
  }

  @Post()
  @UseGuards(AdminGuard)
  async createClassPack(
    @Body() createClassPackDto: CreateClassPackDto,
    @GetUser() user: User,
  ) {
    const classPack = await this.classpacksService.createClassPack(
      createClassPackDto,
      user,
    );

    return {
      errorCode: 0,
      message: 'Success',
      data: {
        pack: classPack,
      },
    };
  }
}
