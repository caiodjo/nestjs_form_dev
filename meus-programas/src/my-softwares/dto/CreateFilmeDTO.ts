import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateFilmeDTO{
  @IsString({message:"nome"})
  @IsNotEmpty({message:"nome"})
  nome: string;

  @IsString({message:"site"})
  @IsNotEmpty({message:"site"})
  site: string;

  @IsString({message:"descricao"})
  @IsNotEmpty({message:"descricao"})
  descricao: string;

  @IsBoolean({message:"gratuito"})
  @IsNotEmpty({message:"gratuito"})
  gratuito: string;

  @IsString({message:"categoria"})
  @IsNotEmpty({message:"categoria"})
  categoria: string;

  @IsString()
  @IsNotEmpty()
  comentarios: string;
}