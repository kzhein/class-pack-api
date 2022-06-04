import { User } from 'src/auth/user.entity';
import { ClassPack } from 'src/classpacks/classpack.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @ManyToOne(() => ClassPack, (classPack) => classPack.orders, { eager: true })
  classPack: ClassPack;

  @Column()
  total: number;

  @Column()
  discount: number;
}
