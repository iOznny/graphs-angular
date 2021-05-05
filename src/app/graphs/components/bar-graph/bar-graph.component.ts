import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styles: [
  ]
})

export class BarGraphComponent implements OnInit {
  
  @Input() horizontal: boolean = false;
  @Input() barChartLabels: Label[] = [];
  @Input() barChartData: ChartDataSets[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true
  };

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  constructor() { }

  ngOnInit(): void {
    // Change bar
    if(this.horizontal) {
      this.barChartType = 'horizontalBar';
    }
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100), 
      Math.round(Math.random() * 100), 
      Math.round(Math.random() * 100),
    ];

    this.barChartData[1].data = [
      Math.round(Math.random() * 100), 
      Math.round(Math.random() * 100), 
      Math.round(Math.random() * 100),
    ];
  }

}
