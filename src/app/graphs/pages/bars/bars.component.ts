import { Component, OnInit } from '@angular/core';

// Ng2Chart
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styles: [
  ]
})

export class BarsComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { 
      xAxes: [{}], 
      yAxes: [{}] 
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = ['2006', '2007', '2008'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { 
      data: [65, 59, 80], 
      label: 'Series A' ,
      backgroundColor: '#35ACF2',
      hoverBackgroundColor: '#3EE6CA'
    },
    { 
      data: [28, 48, 40], 
      label: 'Series B',
      backgroundColor: '#38E7FC',
      hoverBackgroundColor: '#3EE6CA'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
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
