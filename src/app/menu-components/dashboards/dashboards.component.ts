import {
  Component,
  inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../../services/router.service';
import { DashboardCardComponent } from '../../page-filling/dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-dashboards',
  imports: [DashboardCardComponent],
  templateUrl: './dashboards.component.html',
  styleUrl: './dashboards.component.css',
})
export class DashboardsComponent implements OnInit, OnChanges {
  names = ['group1', 'group2', 'group3', 'group4', 'group5']
  private routerService = inject(RouterService);
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.url.subscribe((urlSegments) => {
      const path = urlSegments.map((segment) => segment.path);
      this.routerService.takeCurrentPath(path[0]);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('dashboards: ', changes);
  }
}
