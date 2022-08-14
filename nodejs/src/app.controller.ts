import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApmService } from 'nestjs-elastic-apm';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly apmService: ApmService,
  ) {}

  @Get()
  getHello(): string {
    const span = this.apmService.startSpan('Custom span name');

    const helloMsg = this.appService.getHello();

    if (span != null) span.end();
    return helloMsg;
  }
}
