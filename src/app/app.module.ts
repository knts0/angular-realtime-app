import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerSideComponent } from './customer-side/customer-side.component';
import { OperatorSideComponent } from './operator-side/operator-side.component';
import { TopComponent } from './top/top.component';
import { ControlValueAccessorComponent } from './control-value-accessor/control-value-accessor.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerSideComponent,
    OperatorSideComponent,
    TopComponent,
    ControlValueAccessorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AmplifyUIAngularModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
