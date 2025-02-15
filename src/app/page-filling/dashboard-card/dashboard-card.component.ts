import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  imports: [],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.css',
})
export class DashboardCardComponent {
  groups = input<string[]>();
  dashboards = 3;
  addDashboards() {
    this.dashboards += 3;
    console.log(this.groups());
  }
}
