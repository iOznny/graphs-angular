import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphsRoutingModule } from './graphs-routing.module';

// Modules
import { ChartsModule } from 'ng2-charts';

// Components
import { BarsComponent } from './pages/bars/bars.component';
import { BarsDoubleComponent } from './pages/bars-double/bars-double.component';
import { DoughnutComponent } from './pages/doughnut/doughnut.component';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { DoughnutHttpComponent } from './pages/doughnut-http/doughnut-http.component';

@NgModule({
  declarations: [
    BarsComponent,
    BarsDoubleComponent,
    DoughnutComponent,
    BarGraphComponent,
    DoughnutHttpComponent
  ],
  imports: [
    CommonModule,
    GraphsRoutingModule,
    ChartsModule
  ]
})

export class GraphsModule { }
