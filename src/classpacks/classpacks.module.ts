import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassPack } from './classpack.entity';
import { ClasspacksController } from './classpacks.controller';
import { ClasspacksService } from './classpacks.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClassPack])],
  controllers: [ClasspacksController],
  providers: [ClasspacksService],
})
export class ClasspacksModule {}
