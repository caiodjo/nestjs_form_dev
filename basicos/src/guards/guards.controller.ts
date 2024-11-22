import { Controller, Get, UseGuards } from '@nestjs/common';
import { AdminGuard } from './admin/admin.guard';

@Controller('guards')
@UseGuards(AdminGuard)
export class GuardsController {

  @Get()
  fn(){
    return 'Tudo certo'
  }

}
