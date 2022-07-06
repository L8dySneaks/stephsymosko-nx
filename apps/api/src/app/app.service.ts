import { Injectable } from '@nestjs/common';
import { Vital } from '@stephsymosko-nx/data-access';

@Injectable()
export class AppService {

  vitals: Vital[] = [
    {
      type: 'Blood Pressure',
      value: '127/77',
      label: 'BP'
    },
    {
      type: 'Oxygen',
      value: '95',
      label: 'O2'
    }
  ];
  getData(): Vital[] {
    return this.vitals;
  }

  addVital() {
    this.vitals.push({
      type: 'Temperature',
      value: '96.9',
      label: 'F'
    })
  }
}
