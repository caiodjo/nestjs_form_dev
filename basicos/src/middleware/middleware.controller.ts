import { Body, Controller, Post } from '@nestjs/common';

@Controller('middleware')
export class MiddlewareController {

  @Post()
  fn(@Body("n") n: number){
    return `Valor recebido: ${n}`
  }

  @Post("/sem")
  fnc(@Body("n") n: number){
    return `Valor recebido: ${n}`
  }
}
