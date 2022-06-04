import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ClassPack } from './classpack.entity';
import { ClasspacksController } from './classpacks.controller';
import { ClasspacksService } from './classpacks.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClassPack]), AuthModule],
  controllers: [ClasspacksController],
  providers: [ClasspacksService],
  exports: [ClasspacksService],
})
export class ClasspacksModule {}
