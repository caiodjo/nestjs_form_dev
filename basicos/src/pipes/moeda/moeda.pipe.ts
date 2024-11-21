import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class MoedaPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value)
    const preco = value.preco
    if (typeof preco !== "number")
      throw new Error("O valor deve ser um numero")
    const [reais, centavos] = preco.toFixed(2).split(".")
    return {preco: `R$ ${reais}, ${centavos}`};
  }
}
