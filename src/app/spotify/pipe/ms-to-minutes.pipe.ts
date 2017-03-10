import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToMinutes'
})
export class MsToMinutesPipe implements PipeTransform {

  transform(ms = 0, suffix = false): string {
    const minutes = Math.floor(ms / 60000);
    return minutes + (suffix ?  ' min.' : '');
  }

}
