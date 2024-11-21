import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ComputaIdadeInterceptor } from './computa-idade/computa-idade.interceptor';

@Controller('interceptors')
export class InterceptorsController {

  @Get()
  @UseInterceptors(ComputaIdadeInterceptor)
  fn(){
    return {
      nome: "João",
      dataNascimento: "10/10/1997"
    }
  }
}
