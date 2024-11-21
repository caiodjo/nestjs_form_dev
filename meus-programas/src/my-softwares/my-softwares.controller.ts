import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors, UsePipes } from '@nestjs/common';
import { MySoftwaresService } from './my-softwares.service';
import { CreateFilmeDTO } from './dto/CreateFilmeDTO';
import { InsertIdPipe } from 'src/pipes/insert-id/insert-id.pipe';
import { EditFilmeDTO } from './dto/EditFilmeDTO';
import { InsertDatePipe } from 'src/pipes/insert-date/insert-date.pipe';
import { FormatInterceptor } from 'src/interceptors/format/format.interceptor';

@Controller('my-softwares')
export class MySoftwaresController {
  constructor(private readonly mySoftwaresService: MySoftwaresService){}

  @Get()
  getAll(){
    return this.mySoftwaresService.getAll()
  }

  @Get(":id")
  @UseInterceptors(FormatInterceptor)
  getUnique(@Param("id") id:string){
    return this.mySoftwaresService.getOne(id)
  }

  @Post()
  @UsePipes(InsertIdPipe)
  @UsePipes(InsertDatePipe)
  createSoftware(@Body() software:CreateFilmeDTO){
    return this.mySoftwaresService.create(software)
  }

  @Put(":id")
  editSoftware(@Body() newSoftware:EditFilmeDTO, @Param("id") id:string){
    return this.mySoftwaresService.edit(id, newSoftware)
  }

  @Delete(":id")
  deleteSoftware(@Param("id") id:string){
    return this.mySoftwaresService.delete(id)
  }
}
