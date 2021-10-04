import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfosystemRoutingModule } from './infosystem-routing.module';

import { InfosystemComponent } from './infosystem.component';
import { InfosystemLinkComponent } from './infosystem-link/infosystem-link.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { MachineLearningComponent } from './machine-learning/machine-learning.component';


@NgModule({
  declarations: [
    InfosystemComponent,
    InfosystemLinkComponent,
    WebDevelopmentComponent,
    MachineLearningComponent
  ],
  imports: [
    CommonModule,
    InfosystemRoutingModule
  ]
})
export class InfosystemModule { }
