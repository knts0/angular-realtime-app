import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerSideComponent } from './customer-side/customer-side.component';
import { OperatorSideComponent } from './operator-side/operator-side.component';

const routes: Routes = [
  { path: 'customer-side', component: CustomerSideComponent },
  { path: 'operator-side', component: OperatorSideComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
