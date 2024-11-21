import { Injectable } from '@nestjs/common';
import { CriarFilmeDTO } from './dto/CriarFilmeDTO';
import { EditarFilmeDTO } from './dto/EditarFilmeDTO';

@Injectable()
export class CrudFilmesService {

  private filmes = [
    {titulo: "filme 1", diretor: "diretor 1", ano: 2001},
    {titulo: "filme 2", diretor: "diretor 2", ano: 2002},
    {titulo: "filme 3", diretor: "diretor 3", ano: 2003},
  ]

  getAll(invertido: string){
    if(invertido === "true"){
      return this.filmes.reverse()
    }
    return this.filmes
  }

  getOne(i: string){
    return this.filmes[+i]
  }

  create(novoFilme: CriarFilmeDTO){
    return this.filmes.push(novoFilme)
  }

  edit(id: string, novoFilme: EditarFilmeDTO){
    const filme = this.filmes[+id]
    Object.assign(filme, novoFilme)
    //novoFilme = {...filme, ...novoFilme}
    this.filmes[+id] = filme
    return filme
  }

  delete(id: string){
    const filme = this.filmes.splice(+id, 1)
    return filme
  }
}
