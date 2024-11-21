import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class InsertDatePipe implements PipeTransform {
  transform(software: any, metadata: ArgumentMetadata) {
    const addedOn = new Date()
    const newSoftware = {... software, inseridoEm: addedOn}
    return newSoftware;
  }
}
