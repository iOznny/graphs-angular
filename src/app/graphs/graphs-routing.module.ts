import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { BarsComponent } from './pages/bars/bars.component';
import { BarsDoubleComponent } from './pages/bars-double/bars-double.component';
import { DoughnutComponent } from './pages/doughnut/doughnut.component';
import { DoughnutHttpComponent } from './pages/doughnut-http/doughnut-http.component';

const routes: Routes = [
  { 
    path: '', 
    children: [
      { path: 'bar', component: BarsComponent },
      { path: 'bardouble', component: BarsDoubleComponent },
      { path: 'doughnut', component: DoughnutComponent },
      { path: 'doughnuthttp', component: DoughnutHttpComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'bar' },    
    ] 
  } 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GraphsRoutingModule { }
