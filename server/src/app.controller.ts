import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { readFile } from 'fs';

@Controller()
export class AppController {
  @Get()
  async greet(@Res() res: Response) {
    try {
      readFile('./src/client/index.html', 'utf-8', (err, dat) => {
        if (err) {
          res.end('<h1>Occured err</h1>');
        }
        res.end(dat);
      });
    } catch (e) {
      res.end(e);
    }
  }

  @Get('style.css')
  async style(@Res() res: Response) {
    readFile('./src/client/style.css', (err, dat) => {
      if (err) return console.log(err);
      res.setHeader('Content-Type', 'text/css');
      res.end(dat);
    });
  }
}
