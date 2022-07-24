import { Injectable } from '@nestjs/common';
import { Vital } from '@stephsymosko-nx/data-access';


const vitals: Vital[] = [
  {
    type: 'Blood Pressure',
    value: '127/77',
    label: 'BP'
  },
  {
    type: 'Oxygen',
    value: '95',
    label: 'O2'
  },
  {
    type: 'Temperature',
    value: '97.4',
    label: 'F'
  }
];
@Injectable()
export class AppService {


  getAllVitals(): Vital[] {
    return vitals;
  }

  addVital() {
    vitals.push({
      type: 'Temperature',
      value: '96.9',
      label: 'F'
    })
  }
}
