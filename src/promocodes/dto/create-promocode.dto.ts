import { IsNumber, IsString } from 'class-validator';

export class CreatePromoCodeDto {
  @IsString()
  name: string;

  @IsNumber()
  percentage: number;
}
