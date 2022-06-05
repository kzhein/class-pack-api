import { Body, Controller, Get, Logger, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';

@Controller('api/orders')
@UseGuards(AuthGuard())
export class OrdersController {
  private logger = new Logger('OrdersController');

  constructor(private ordersService: OrdersService) {}

  @Get()
  async getOrders(@GetUser() user: User) {
    const orders = await this.ordersService.getOrders(user);

    return {
      errorCode: 0,
      message: 'Success',
      data: {
        total_item: orders.length,
        total_page: 1,
        orders,
      },
    };
  }

  @Post()
  async createOrder(
    @Body() createOrderDto: CreateOrderDto,
    @GetUser() user: User,
  ) {
    const order = await this.ordersService.createOrder(createOrderDto, user);

    this.logger.log(`Order created - ${order.id}`);

    return {
      errorCode: 0,
      message: 'Success',
      data: {
        order,
      },
    };
  }
}
