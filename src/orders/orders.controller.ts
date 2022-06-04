import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';

@Controller('api/orders')
@UseGuards(AuthGuard())
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  getOrders(@GetUser() user: User) {
    return this.ordersService.getOrders(user);
  }

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto, @GetUser() user: User) {
    return this.ordersService.createOrder(createOrderDto, user);
  }
}
