import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AddIdInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    return new Observable((observer) => {
       return next.handle().subscribe({
        next:(software) => {
          console.log(software)
          const randomId = Math.floor(Math.random()*100)
          const newSoftware = {... software, id: randomId}
          observer.next(newSoftware)
          observer.complete()
        }
       })
    })
    .pipe(
      tap(() => console.log(`After... ${Date.now() - now}ms`))
    );
  }
}
