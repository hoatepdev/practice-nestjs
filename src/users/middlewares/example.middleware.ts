import { HttpStatus } from '@nestjs/common/enums';
import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Example middleware');
    console.log(req.headers.authorization);
    const { authorization } = req.headers;
    if (!authorization)
      throw new HttpException('No Authorzation token', HttpStatus.FORBIDDEN);
    if (authorization === 'Token verify') next();
    else
      throw new HttpException(
        'Invalid Authorzation token',
        HttpStatus.FORBIDDEN,
      );
  }
}
