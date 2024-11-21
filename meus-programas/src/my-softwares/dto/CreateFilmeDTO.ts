import { IsNotEmpty } from "class-validator";

export class CreateFilmeDTO{
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  site: string;

  @IsNotEmpty()
  descricao: string;

  @IsNotEmpty()
  gratuito: string;

  @IsNotEmpty()
  categoria: string;

  @IsNotEmpty()
  comentarios: string;
}