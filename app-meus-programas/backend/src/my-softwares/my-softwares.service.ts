import { Injectable } from '@nestjs/common';
import { CreateFilmeDTO } from './dto/CreateFilmeDTO';
import { EditFilmeDTO } from './dto/EditFilmeDTO';

@Injectable()
export class MySoftwaresService {
  private mySoftwares: any = [{
    nome: 'GIMP',
    site: 'https://www.gimp.org',
    descricao: 'GIMP é um editor de imagens gratuito e de código aberto.',
    categoria: 'UTILITARIO',
    gratuito: true,
    comentarios: 'Tem me ajudado bastante a editar imagens.',
    inseridoEm: '2024-11-21T20:50:03.780Z',
    id: 0,
    idUsuario: 0
  },
  {
    nome: 'LibreOffice',
    site: 'https://www.libreoffice.org',
    descricao: 'LibreOffice é uma suíte de escritório gratuita e de código aberto.',
    categoria: 'UTILITARIO',
    gratuito: false,
    comentarios: 'Uso o LibreOffice para todas as minhas necessidades de escritório.',
    inseridoEm: '2024-11-21T20:50:04.668Z',
    id: 44,
    idUsuario: 0
  },
  {
    nome: 'VLC Media Player',
    site: 'https://www.videolan.org/vlc/',
    descricao: 'VLC é um reprodutor multimídia gratuito e de código aberto.',
    categoria: 'MULTIMIDIA',
    gratuito: true,
    comentarios: 'VLC é ótimo para reproduzir qualquer tipo de mídia.',
    inseridoEm: '2024-11-21T20:50:05.942Z',
    id: 55,
    idUsuario: 0
  }];

  getAll() {
    return this.mySoftwares;
  }

  getOne(id:string){
    return this.mySoftwares.filter(software => software.id === +id)[0]
  }

  create(software: CreateFilmeDTO) {
    console.log({...software, idUsuario: 0})
    return this.mySoftwares.push({...software, idUsuario: 0});
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
