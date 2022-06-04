import { IsOptional, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  classPackId: string;

  @IsOptional()
  @IsString()
  promoCode: string;
}
