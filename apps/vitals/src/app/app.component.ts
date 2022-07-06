import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Vital } from '@stephsymosko-nx/data-access';

@Component({
  selector: 'stephsymosko-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vitals';
  vitals: Vital[] = [];

  constructor(
    private http: HttpClient
  ){
    this.fetch();
  }
  // vitals: Vital[] = [
  //   {
  //     type: 'Blood Pressure',
  //     value: '127/77',
  //     label: 'BP'
  //   },
  //   {
  //     type: 'Oxygen',
  //     value: '95',
  //     label: 'O2'
  //   }
  // ];


  fetch() {
    this.http.get<Vital[]>('/api/vitals').subscribe((v) => (this.vitals = v));
  }
  addVital() {
    this.http.post('/api/addVital', {}).subscribe(() => {
      this.fetch();
    });
    // this.vitals.push({
    //   type: 'Temperature',
    //   value: '96.9',
    //   label: 'F'
    // });
  }
}
