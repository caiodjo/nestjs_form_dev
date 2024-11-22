import { HttpException, HttpStatus } from "@nestjs/common";

export class ErroHTTP extends HttpException{
  constructor(){
    super("Houve um problema", HttpStatus.I_AM_A_TEAPOT)
  }
}