import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidarEmailPipe implements PipeTransform {
  transform(email: any, metadata: ArgumentMetadata) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!regex.test(email)){
      throw new BadRequestException("O e-mail fornecido é invalido")
    }
    return email;
  }
}
