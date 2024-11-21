import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CrudFilmesService } from './crud-filmes.service';
import { CriarFilmeDTO } from './dto/CriarFilmeDTO';
import { EditarFilmeDTO } from './dto/EditarFilmeDTO';

@Controller('filmes')
export class CrudFilmesController {
  constructor(private readonly crudFilmesService: CrudFilmesService){}

  @Get()
  getAll(@Query('invertido') invertido:string){
    return this.crudFilmesService.getAll(invertido)
  }

  @Get(":id")
  getOne(@Param("id") id:string){
    return this.crudFilmesService.getOne(id)
  }

  @Post()
  create(@Body() dadosFilme: CriarFilmeDTO){
    return this.crudFilmesService.create(dadosFilme)
  }

  @Put(":id")
  edit(@Param("id") id: string, @Body() dadosFilme: EditarFilmeDTO){
    return this.crudFilmesService.edit(id, dadosFilme)
  }

  @Delete(":id")
  delete(@Param("id") id: string){
    return this.crudFilmesService.delete(id)
  }
}
