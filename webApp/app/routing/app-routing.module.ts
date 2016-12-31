import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from '../dashboard/dashboard.component';
import { Temp2Component }      from '../patient/temp2.component';
import { Temp1Component }  from '../doctor/temp1.component';

const routes: Routes = [
  { path: '',  component: DashboardComponent },
  { path: 'temp1', component: Temp1Component },
  { path: 'temp2',     component: Temp2Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
