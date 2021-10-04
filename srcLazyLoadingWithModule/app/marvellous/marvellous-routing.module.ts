import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularComponent } from './angular/angular.component';
import { MarvellousLinkComponent } from './marvellous-link/marvellous-link.component';
import { MarvellousComponent } from './marvellous.component';
import { PythonComponent } from './python/python.component';

const routes: Routes = [
  { path: '', component:  MarvellousComponent,

    children:[
      { path: 'angular', component: AngularComponent}
    ] 
},

{ path: '', component: MarvellousLinkComponent,
    children:[
      { path: 'python', component: PythonComponent}
    ] 
}
  
// { path: 'angular', component: AngularComponent},
  //{ path: 'python', component: PythonComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarvellousRoutingModule { }
