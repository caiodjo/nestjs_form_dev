import { Controller, Get, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { MeuFiltroFilter } from './meu-filtro/meu-filtro.filter';
import { Erro } from './personalizados/Erro';
import { ErroHTTP } from './personalizados/ErroHTTP';

@Controller('erros')
@UseFilters(MeuFiltroFilter)
export class ErrosController {

  @Get()
  erro(){
    throw new Error();
  }

  @Get("http")
  erroHttp(){
    throw new HttpException("deu ruim", HttpStatus.BAD_REQUEST)
  }
  @Get("personalizado")
  erroPersonalizado(){
    throw new Erro();
  }

  @Get("http/personalizado")
  erroHttpPersonalizado(){
    throw new ErroHTTP()
  }
}
