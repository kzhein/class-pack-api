import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum PackType {
  UNLIMITED = 'unlimited',
  SHAREABLE = 'shareable',
  NON_SHAREABLE = 'non_shareable',
}

@Entity()
export class ClassPack {
  @PrimaryGeneratedColumn('uuid')
  pack_id: string;

  @Column({ type: 'int' })
  disp_order: number;

  @Column()
  pack_name: string;

  @Column()
  pack_description: string;

  @Column()
  pack_type: PackType;

  @Column({ type: 'int' })
  total_credit: number;

  @Column({ nullable: true })
  tag_name: string;

  @Column({ type: 'int' })
  validity_month: number;

  @Column()
  pack_price: number;

  @Column()
  newbie_first_attend: boolean;

  @Column({ type: 'int' })
  newbie_addition_credit: number;

  @Column({ nullable: true })
  newbie_note: string;

  @Column()
  pack_alias: string;

  @Column()
  estimate_price: number;
}
