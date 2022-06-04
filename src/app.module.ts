import { Module } from '@nestjs/common';
import { ClasspacksModule } from './classpacks/classpacks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassPack } from './classpacks/classpack.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'classpack',
      entities: [ClassPack],
      synchronize: true,
    }),
    ClasspacksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
