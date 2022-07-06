import { Injectable } from '@nestjs/common';

interface Vital {
  type: string;
  value: string;
  label: string;
}

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
