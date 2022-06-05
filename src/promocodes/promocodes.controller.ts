import { Body, Controller, Logger, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreatePromoCodeDto } from './dto/create-promocode.dto';
import { PromoCodesService } from './promocodes.service';

@Controller('api/promoCodes')
@UseGuards(AuthGuard())
export class PromoCodesController {
  private logger = new Logger('PromoCodesController');

  constructor(private promoCodesService: PromoCodesService) {}

  @Post()
  async createPromoCode(
    @Body() createPromoCodeDto: CreatePromoCodeDto,
    @GetUser() user: User,
  ) {
    const promoCode = await this.promoCodesService.createPromoCode(
      createPromoCodeDto,
      user,
    );

    this.logger.log(`Promo Code created - ${promoCode.name}`);

    return {
      errorCode: 0,
      message: 'Success',
      data: {
        promoCode,
      },
    };
  }
}
