import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfosystemLinkComponent } from './infosystem-link/infosystem-link.component';
import { InfosystemComponent } from './infosystem.component';
import { MachineLearningComponent } from './machine-learning/machine-learning.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';

const routes: Routes = [
  { path: '', component: InfosystemLinkComponent,
    children: [
      { path: 'webdevelopment', component: WebDevelopmentComponent},
      { path: 'ml', component: MachineLearningComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfosystemRoutingModule { }
