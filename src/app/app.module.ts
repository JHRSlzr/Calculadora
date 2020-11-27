import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Componentes
import { CalculadoraComponent } from './components/calculadora/calculadora.component';

//Redux
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { OperationState } from '././models/operation/operation.redux';


@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      OperationState
    ], {developmentMode: true}),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
