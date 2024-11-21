import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ComputaIdadeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return new Observable((observer) => {
      return next.handle().subscribe({
        next:(pessoa) =>{
          const [dia, mes, ano] = pessoa.dataNascimento.split("/")
          const dataNascimento = new Date(ano, mes-1, dia).getTime()
          const dataAtual = new Date().getTime()
          const diferencaEmMs = dataAtual - dataNascimento
          const idadeEmDias = Math.floor(diferencaEmMs / (1000*60*60*24))
          const idadeEmAnos = Math.floor(idadeEmDias/365.25)
          const novaPessoa = {...pessoa, idade: idadeEmAnos}
          observer.next(novaPessoa)
          observer.complete()
        }
      });
    })
    
  }
}
