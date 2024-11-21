import { Body, Controller, Get, Post, Query, UsePipes } from '@nestjs/common';
import { MoedaPipe } from './moeda/moeda.pipe';
import { ValidarEmailPipe } from './validar-email/validar-email.pipe';

@Controller('pipes')
export class PipesController {

  @Post("/preco")
  @UsePipes(MoedaPipe)
  pipeTransforma(@Body() dados: any){
    const {preco} = dados
    return `precos obtidos: ${preco}`
  }

  @Get("/email")
  @UsePipes(ValidarEmailPipe)
  pipeValidator(@Query("email") email: string){
    return `email recebido: ${email}`
  }
}
