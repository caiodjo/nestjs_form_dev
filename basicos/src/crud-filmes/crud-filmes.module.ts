import { Module } from '@nestjs/common';
import { CrudFilmesController } from './crud-filmes.controller';
import { CrudFilmesService } from './crud-filmes.service';

@Module({
  controllers: [CrudFilmesController],
  providers: [CrudFilmesService]
})
export class CrudFilmesModule {}
