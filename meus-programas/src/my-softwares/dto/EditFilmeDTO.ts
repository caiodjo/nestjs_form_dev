import { IsOptional } from 'class-validator';

export class EditFilmeDTO {
  @IsOptional()
  name: string;

  @IsOptional()
  site: string;

  @IsOptional()
  description: string;

  @IsOptional()
  gratuito: string;

  @IsOptional()
  categoria: string;

  @IsOptional()
  comentarios: string;
}
