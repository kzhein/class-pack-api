import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { PackType } from '../classpack.entity';

export class CreateClassPackDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  disp_order: number;

  @IsString()
  pack_name: string;

  @IsString()
  pack_description: string;

  @IsEnum(PackType)
  pack_type: PackType;

  @IsNumber()
  total_credit: number;

  @IsOptional()
  @IsString()
  tag_name: string;

  @IsNumber()
  validity_month: number;

  @IsNumber()
  pack_price: number;

  @IsBoolean()
  newbie_first_attend: boolean;

  @IsNumber()
  newbie_addition_credit: number;

  @IsOptional()
  @IsString()
  newbie_note: string;

  @IsString()
  pack_alias: string;

  @IsNumber()
  estimate_price: number;
}
