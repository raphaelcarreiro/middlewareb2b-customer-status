import { Request, Response } from 'express';
import xmlParser from 'express-xml-bodyparser';
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class XmlBodyMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => any) {
    xmlParser()(req, res, next);
  }
}
