import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class EditFilmeDTO {
  @IsString()
  @IsOptional()
  nome: string;

  @IsString()
  @IsOptional()
  site: string;

  @IsString()
  @IsOptional()
  descricao: string;

  @IsOptional()
  @IsBoolean()
  gratuito: string;

  @IsString()
  @IsOptional()
  categoria: string;

  @IsString()
  @IsOptional()
  comentarios: string;
}
