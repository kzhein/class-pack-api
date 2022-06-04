import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { PromoCode } from './promocode.entity';
import { PromoCodesController } from './promocodes.controller';
import { PromoCodesService } from './promocodes.service';

@Module({
  controllers: [PromoCodesController],
  providers: [PromoCodesService],
  imports: [TypeOrmModule.forFeature([PromoCode]), AuthModule],
})
export class PromocodesModule {}
