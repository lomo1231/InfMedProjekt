import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { Temp2Component }      from './temp2.component';
import { Temp1Component }  from './temp1.component';

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