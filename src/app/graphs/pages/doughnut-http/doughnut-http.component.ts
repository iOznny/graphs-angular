import { Component, OnInit } from '@angular/core';

// Graficas
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

// Services
import { GraphsService } from '../../services/graphs.service';

@Component({
  selector: 'app-doughnut-http',
  templateUrl: './doughnut-http.component.html',
  styles: [
  ]
})

export class DoughnutHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public colors: Color[] = [{
    backgroundColor: [
      '#2554EB',
      '#6751FA',
      '#7A3DD1',
      '#33616B'
    ]
  }]
  
  constructor(private graphService: GraphsService) { }

  ngOnInit(): void {
    /* this.graphService.getSocialMediasUsers().subscribe(
      data => {
        const labels = Object.keys(data);
        const values = Object.values(data);

        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values); 
      }
    ); */

    this.graphService.getUsersSocialMedia()
    .subscribe( ({ labels, values }) => {
      this.doughnutChartLabels = labels;
      this.doughnutChartData.push(values); 
    });
  }

}
