import { Injectable } from '@nestjs/common';
import { CreateFilmeDTO } from './dto/CreateFilmeDTO';
import { EditFilmeDTO } from './dto/EditFilmeDTO';

@Injectable()
export class MySoftwaresService {
  private mySoftwares = [];

  getAll() {
    return this.mySoftwares;
  }

  getOne(id:string){
    return this.mySoftwares.filter(software => software.id === +id)[0]
  }

  create(software: CreateFilmeDTO) {
    return this.mySoftwares.push(software);
  }

  edit(id: string, software: EditFilmeDTO){
    const filme = this.mySoftwares.filter(software => software.id === +id)[0]
    Object.assign(filme, software)
    return filme
  }

  delete(id:string){
    const indexFilme = this.mySoftwares.findIndex(software => software.id === +id)
    return this.mySoftwares.splice(indexFilme, 1)
  }
}
