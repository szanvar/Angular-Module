import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MarvellousModule } from './marvellous/marvellous.module';
import { InfosystemModule } from './infosystem/infosystem.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MarvellousModule,
    InfosystemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
