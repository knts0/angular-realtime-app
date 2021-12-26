import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerSideComponent } from './customer-side/customer-side.component';

const routes: Routes = [
  { path: 'customer-side', component: CustomerSideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
