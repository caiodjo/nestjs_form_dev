import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true, 
    stopAtFirstError:true,
    exceptionFactory: (erros) => {
      const problemProps = erros.map(erro=>erro.property)
      const message = `Programa inválido. Propriedades faltando ou incorretas: ${problemProps.join(', ')}`
      return new BadRequestException(message)
    }
  }))
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
