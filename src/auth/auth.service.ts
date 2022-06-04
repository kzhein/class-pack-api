import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto) {
    const { email, password } = authCredentialsDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      const user = this.usersRepository.create({
        email,
        password: hashedPassword,
      });
      const createdUser = await this.usersRepository.save(user);
      createdUser.password = undefined;

      const token = await this.jwtService.sign({ id: createdUser.id });

      return { user: createdUser, token };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Email already exists');
      } else {
        throw error;
      }
    }
  }

  async signIn(authCredentialsDto: AuthCredentialsDto) {
    const { email, password } = authCredentialsDto;
    const user = await this.usersRepository.findOne({
      where: { email },
      select: ['id', 'email', 'password', 'isAdmin', 'tier'],
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      user.password = undefined;
      const token = await this.jwtService.sign({ id: user.id });
      return { user, token };
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }
}
