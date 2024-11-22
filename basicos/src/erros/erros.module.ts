import { Module } from '@nestjs/common';
import { ErrosController } from './erros.controller';

@Module({
  controllers: [ErrosController]
})
export class ErrosModule {}
