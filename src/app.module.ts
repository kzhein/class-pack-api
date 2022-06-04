import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';
import { ClassPack } from './classpacks/classpack.entity';
import { ClasspacksModule } from './classpacks/classpacks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'classpack',
      entities: [ClassPack, User],
      synchronize: true,
    }),
    ClasspacksModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
