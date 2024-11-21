import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpStatus, Logger } from '@nestjs/common';

@Catch(BadRequestException)
export class MeuFiltroFilter<T> implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const logger = new Logger(MeuFiltroFilter.name)
    const resposta = host.switchToHttp().getResponse()
    logger.error(exception.response.message)
    resposta.status(HttpStatus.BAD_REQUEST).json({
      mensagem:`não foi possivel cadastrar. propriedades faltando: ${exception.response.message}`,
      complemento:`${exception}`,
      codigo: HttpStatus.BAD_REQUEST
    })
  }
}
