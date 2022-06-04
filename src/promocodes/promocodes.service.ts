import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { Repository } from 'typeorm';
import { CreatePromoCodeDto } from './dto/create-promocode.dto';
import { PromoCode } from './promocode.entity';

@Injectable()
export class PromoCodesService {
  constructor(
    @InjectRepository(PromoCode)
    private promoCodesRepository: Repository<PromoCode>,
  ) {}

  getPromoCode(name: string) {
    return this.promoCodesRepository.findOneBy({ name });
  }

  async createPromoCode(createPromoCodeDto: CreatePromoCodeDto, user: User) {
    try {
      const promocode = this.promoCodesRepository.create({
        ...createPromoCodeDto,
        createdBy: user,
      });
      return await this.promoCodesRepository.save(promocode);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Code name already exists');
      } else {
        throw error;
      }
    }
  }
}
