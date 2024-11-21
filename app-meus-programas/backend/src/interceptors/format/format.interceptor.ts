import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

function formatSoftware(software: any){
  const addOnDate:Date = new Date(software.inseridoEm)
  software = {
    ...software, 
    inseridoEm: addOnDate.toLocaleDateString("pt-BR"),
    gratuito: software.gratuito ? "Sim" : "Não"
  }
  return software;
}

@Injectable()
export class FormatInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return new Observable((observer) => {
      return next.handle().subscribe({
       next:(toFormat) => {
         if(Array.isArray(toFormat)){
          const formatedData = toFormat.map(formatSoftware)
          observer.next(formatedData)
         } else {
           observer.next(formatSoftware(toFormat))
         }
         observer.complete()
       }
      })
   })
  }
}
