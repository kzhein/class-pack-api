import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { ClasspacksService } from 'src/classpacks/classpacks.service';
import { PromoCodesService } from 'src/promocodes/promocodes.service';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    private classPacksService: ClasspacksService,
    private promoCodesService: PromoCodesService,
  ) {}

  async getOrders(user: User) {
    return this.ordersRepository.find({
      where: {
        user,
      },
    });
  }

  async createOrder(createOrderDto: CreateOrderDto, user: User) {
    const classPack = await this.classPacksService.getClassPack(
      createOrderDto.classPackId,
    );

    if (!classPack) {
      throw new BadRequestException('Class Pack not found');
    }

    let total = classPack.pack_price;
    let discount = 0;

    const promoCode = await this.promoCodesService.getPromoCode(
      createOrderDto.promoCode,
    );

    if (promoCode) {
      discount = total * (promoCode.percentage / 100);
      total -= discount;
    }

    const order = this.ordersRepository.create({
      classPack,
      total,
      user,
      discount,
    });

    return this.ordersRepository.save(order);
  }
}
