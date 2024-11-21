import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MiddlewareController } from './middleware.controller';
import { LogarMiddleware } from './logar/logar.middleware';

@Module({
  controllers: [MiddlewareController]
})
export class MiddlewareModule {
  configure(consumer:MiddlewareConsumer){
    // consumer.apply(LogarMiddleware).forRoutes(MiddlewareController)
    // consumer.apply(LogarMiddleware).forRoutes(
    //   {path: "middleware", method: RequestMethod.ALL}
    // )
    consumer.apply(LogarMiddleware).exclude(
      {path: "middleware/sem", method: RequestMethod.ALL}
    ).forRoutes(MiddlewareController)
  }
}
