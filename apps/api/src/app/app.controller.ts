import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('vitals')
  getData() {
    return this.appService.getData();
  }

  @Post('addVital')
  addVital() {
    return this.appService.addVital();
  }
}
