import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'Marvellous', loadChildren: () => import('./marvellous/marvellous.module').then(m => m.MarvellousModule) },
  // { path: 'Infosystem', loadChildren: () => import('./infosystem/infosystem.module').then(m => m.InfosystemModule) }
  {path: 'marvellous', loadChildren: () => import('./marvellous/marvellous.module').then(m => m.MarvellousModule)},
  {path: 'infosystem', loadChildren: () => import('./infosystem/infosystem.module').then(m => m.InfosystemModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
