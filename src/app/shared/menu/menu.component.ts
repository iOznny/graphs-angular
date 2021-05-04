import { Component } from '@angular/core';

interface MenuItem {
  route: string;
  title: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `]
})

export class MenuComponent {

  public menu: MenuItem[] = [
    {
      route: 'graphs/bar',
      title: 'Bar'
    },
    {
      route: 'graphs/bardouble',
      title: 'Bar Double'
    },
    {
      route: 'graphs/doughnut',
      title: 'Doughnut'
    },
    {
      route: 'graphs/doughnuthttp',
      title: 'Doughnut HTTP'
    }
  ];

}
