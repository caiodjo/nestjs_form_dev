import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MySoftwaresModule } from './my-softwares/my-softwares.module';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { PipesModule } from './pipes/pipes.module';

@Module({
  imports: [MySoftwaresModule, InterceptorsModule, PipesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
