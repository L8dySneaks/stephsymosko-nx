import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('vitals')
  getAllVitals() {
    return this.appService.getAllVitals();
  }

  @Post('addVital')
  addVital() {
    return this.appService.addVital();
  }
}
