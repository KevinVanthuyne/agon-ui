import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true,
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, length: number) {
    return value.split(' ').slice(0, length).join(' ') + '...';
  }
}
