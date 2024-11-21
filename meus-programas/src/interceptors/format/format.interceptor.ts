import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class FormatInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return new Observable((observer) => {
      return next.handle().subscribe({
       next:(software) => {
         console.log(software)
         const addOnDate:Date = software.inseridoEm
         console.log(addOnDate)
         software = {...software, inseridoEm: addOnDate.toLocaleDateString("pt-BR")}
         observer.next(software)
         observer.complete()
       }
      })
   })
  }
}
