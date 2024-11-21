import {IsString, IsNotEmpty, Length, IsNumber} from "class-validator"

export class CriarFilmeDTO{
  @IsNotEmpty()
  @IsString({message: "O titulo precisa ser uma string"})
  @Length(3, 20, {message: "O tamanho do titulo deve ser válido"})
  titulo:string;

  @IsNotEmpty()
  @IsString({message: "O diretor recisa ser uma string"})
  @Length(3, 20, {message: "O tamanho do titulo deve ser válido"})
  diretor:string;

  @IsNotEmpty()
  @IsNumber()
  ano:number;
}