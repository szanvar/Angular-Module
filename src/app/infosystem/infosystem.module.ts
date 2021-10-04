import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PythonComponent } from './python/python.component';


@NgModule({
  declarations: [
    PythonComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    PythonComponent
  ]
})
export class InfosystemModule { }
