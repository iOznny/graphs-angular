import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})

export class DoughnutComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [{
    backgroundColor: [
      '#2554EB',
      '#6751FA',
      '#7A3DD1',
      '#33616B'
    ]
  }]
  
  constructor() { }

  ngOnInit(): void {
  }

}
