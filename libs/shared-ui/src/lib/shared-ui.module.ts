import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VitalsComponent } from './vitals/vitals.component';

@NgModule({
  imports: [CommonModule],
  declarations: [VitalsComponent],
  exports: [VitalsComponent],
})
export class SharedUiModule {}
