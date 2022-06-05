import { ClassPack } from 'src/classpacks/classpack.entity';
import { Order } from 'src/orders/order.entity';
import { PromoCode } from 'src/promocodes/promocode.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ default: false })
  isAdmin: boolean;

  @Column({ default: 'newbie' })
  tier: string;

  @OneToMany(() => ClassPack, (classPack) => classPack.createdBy)
  classPacks: ClassPack[];

  @OneToMany(() => PromoCode, (promoCode) => promoCode.createdBy)
  promoCodes: PromoCode[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
