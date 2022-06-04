import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';
import { ClassPack } from './classpacks/classpack.entity';
import { ClasspacksModule } from './classpacks/classpacks.module';
import { PromoCode } from './promocodes/promocode.entity';
import { PromocodesModule } from './promocodes/promocodes.module';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/order.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'classpack',
      entities: [ClassPack, User, PromoCode, Order],
      synchronize: true,
    }),
    ClasspacksModule,
    AuthModule,
    PromocodesModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
