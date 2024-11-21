import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class InsertIdPipe implements PipeTransform {
  transform(software: any, metadata: ArgumentMetadata) {
    const randomId = Math.floor(Math.random()*100)
    const newSoftware = {... software, id: randomId}
    return newSoftware;
  }
}
