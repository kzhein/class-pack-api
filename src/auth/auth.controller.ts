import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() authCredentialsDto: AuthCredentialsDto) {
    const { token, user } = await this.authService.signUp(authCredentialsDto);

    return {
      errorCode: 0,
      message: 'Success',
      data: {
        token,
        user,
      },
    };
  }

  @Post('/signin')
  async signIn(@Body() authCredentialsDto: AuthCredentialsDto) {
    const { token, user } = await this.authService.signIn(authCredentialsDto);

    return {
      errorCode: 0,
      message: 'Success',
      data: {
        token,
        user,
      },
    };
  }
}
