import { Component } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-bars-double',
  templateUrl: './bars-double.component.html',
  styles: [
  ]
})

export class BarsDoubleComponent {
 
  public proveedoresLabels: string[] = ['2021', '2022','2023','2024','2025'];  
  public productoData: ChartDataSets[] = [
    { 
      data: [200, 300, 200, 300, 150], 
      label: 'Carros', 
      backgroundColor: '#35ACF2',
      hoverBackgroundColor: '#38E7FC' 
    }
  ];

  public proveedoresData: ChartDataSets[] = [
    { 
      data: [100, 200, 300, 400, 500 ], 
      label: 'Vendedor A' 
    },
    { 
      data: [50, 250, 30, 450, 200 ], 
      label: 'Vendedor B' 
    },
  ];
  
}
