import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarvellousRoutingModule } from './marvellous-routing.module';

import { AngularComponent } from './angular/angular.component';
import { PythonComponent } from './python/python.component';
import { MarvellousLinkComponent } from './marvellous-link/marvellous-link.component';
import { MarvellousComponent } from './marvellous.component';


@NgModule({
  declarations: [
    AngularComponent,
    PythonComponent,
    MarvellousLinkComponent,
    MarvellousComponent
  ],
  imports: [
    CommonModule,
    MarvellousRoutingModule
  ]
})
export class MarvellousModule { }
