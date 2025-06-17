import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
 constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async register(email: string, password: string) {
    const userSaved = await this.usersService.findByEmail(email) as User & { _id:string };
    if(userSaved){
      throw new BadRequestException('user registered');
    }
    const hash = await bcrypt.hash(password, 10);
    const user = await this.usersService.create({ email, password: hash }) as User & { _id:string };
    return { email: user.email, userId: user._id };
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email) as User & { _id:string };
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: user._id, email: user.email };
    const token =  this.jwtService.sign(payload);
    return {
      email: user.email, 
      userId: user._id,
      token
    }
  }
}
