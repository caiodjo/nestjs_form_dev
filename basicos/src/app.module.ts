import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudFilmesModule } from './crud-filmes/crud-filmes.module';
import { MiddlewareController } from './middleware/middleware.controller';
import { MiddlewareModule } from './middleware/middleware.module';
import { PipesModule } from './pipes/pipes.module';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { InterceptorsController } from './interceptors/interceptors.controller';

@Module({
  imports: [CrudFilmesModule, MiddlewareModule, PipesModule, InterceptorsModule],
  controllers: [AppController, MiddlewareController, InterceptorsController],
  providers: [AppService],
})
export class AppModule {}
