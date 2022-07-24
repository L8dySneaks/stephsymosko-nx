import { Component, Input, OnInit } from '@angular/core';
import { Vital } from '@stephsymosko-nx/data-access';

@Component({
  selector: 'stephsymosko-nx-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.scss'],
})
export class VitalsComponent implements OnInit {
  @Input() vitals: Vital[] = [];

  constructor() {}

  ngOnInit(): void {}
}
