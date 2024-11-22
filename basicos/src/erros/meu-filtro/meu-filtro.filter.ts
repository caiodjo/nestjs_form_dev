import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus, Logger } from '@nestjs/common';
import { Erro } from '../personalizados/Erro';
import { ErroHTTP } from '../personalizados/ErroHTTP';

@Catch(Erro, ErroHTTP)
export class MeuFiltroFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const logger = new Logger(MeuFiltroFilter.name)
    const resposta = host.switchToHttp().getResponse()
    logger.error(exception)
    resposta.status(HttpStatus.I_AM_A_TEAPOT).json({
      mensagem: "nao foi possivel completar",
      complemento: `${exception}`,
      codigo: HttpStatus.I_AM_A_TEAPOT
    })
  }
}
