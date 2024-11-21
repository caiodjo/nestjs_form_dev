import { Module } from '@nestjs/common';
import { MySoftwaresController } from './my-softwares.controller';
import { MySoftwaresService } from './my-softwares.service';

@Module({
  controllers: [MySoftwaresController],
  providers: [MySoftwaresService]
})
export class MySoftwaresModule {}
