import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { BasicStrategy as Strategy } from 'passport-http';
import { IDistributorService } from 'src/distributor/interfaces/distributor.service.interface';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('IDistributorService')
    private readonly distributorService: IDistributorService,
  ) {
    super({
      passReqToCallback: true,
    });
  }

  async validate(request: Request, username: string, password: string): Promise<boolean> {
    console.log(request);
    try {
      await this.distributorService.findByUsernameAndPassword(username, password);
      return true;
    } catch (err) {
      console.error(err);
      throw new HttpException('Não autorizado', HttpStatus.UNAUTHORIZED);
    }
  }
}
