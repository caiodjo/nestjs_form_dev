import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudFilmesModule } from './crud-filmes/crud-filmes.module';
import { MiddlewareController } from './middleware/middleware.controller';
import { MiddlewareModule } from './middleware/middleware.module';

@Module({
  imports: [CrudFilmesModule, MiddlewareModule],
  controllers: [AppController, MiddlewareController],
  providers: [AppService],
})
export class AppModule {}
