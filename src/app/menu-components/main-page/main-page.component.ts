import {
  Component,
  computed,
  inject,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';
import { UiService } from '../../services/ui.service';
import { BehaviorSubject } from 'rxjs';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../../services/router.service';
import { DefaultButtonDirective } from '../../../directives/default-button.directive';
import { FormComponent } from '../../form/form.component';

@Component({
  selector: 'app-main-page',
  imports: [DefaultButtonDirective, FormComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent implements OnInit, OnChanges {
  private routerService = inject(RouterService);
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.url.subscribe((urlSegments) => {
      const path = urlSegments.map((segment) => segment.path);
      this.routerService.takeCurrentPath(path[0]);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('main-page: ', changes);
  }
}
