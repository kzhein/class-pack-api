import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';
import { ClassPack } from './classpacks/classpack.entity';
import { ClasspacksModule } from './classpacks/classpacks.module';
import { PromoCode } from './promocodes/promocode.entity';
import { PromocodesModule } from './promocodes/promocodes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'classpack',
      entities: [ClassPack, User, PromoCode],
      synchronize: true,
    }),
    ClasspacksModule,
    AuthModule,
    PromocodesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
