import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ClasspacksModule } from 'src/classpacks/classpacks.module';
import { PromocodesModule } from 'src/promocodes/promocodes.module';
import { Order } from './order.entity';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
    TypeOrmModule.forFeature([Order]),
    AuthModule,
    ClasspacksModule,
    PromocodesModule,
  ],
})
export class OrdersModule {}
