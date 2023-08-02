import { Pipe, PipeTransform } from '@angular/core';
import { tour } from './tour';

@Pipe({
  name: 'tourFilter'
})
export class TourFilterPipe implements PipeTransform {

  transform(value: tour[], filterText?: string): tour[] {
    filterText = filterText?filterText.toLocaleLowerCase():null

    return filterText?value.filter((p:tour)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
