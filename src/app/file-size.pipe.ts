import { Pipe, PipeTransform } from '@angular/core';

let SIZE_UNITS=['B','KB','MB'];
let SIZE_UNITS_LARGE=['Bytes','Kilobytes','Megabytes'];

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  
  transform(sizeBytes: number,sizeForm:boolean): string {
    let sizeUnits=sizeForm ? SIZE_UNITS_LARGE:SIZE_UNITS;
    let sizeRounVal=Math.round();



    return null;
  }

}
