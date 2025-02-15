import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-form',
  animations: [
    trigger('formState', [
      state(
        'void',
        style({
          transform: 'translateY(-150vh)',
        })
      ),
      state(
        'mount',
        style({
          // transform: 'translateY(0vh)', ???????????????????????????????
        })
      ),
      state(
        'unmount',
        style({
          transform: 'translateY(-150vh)',
        })
      ),
      transition('mount => unmount', animate(500)),
      transition('unmount => mount', animate(500)),
      transition('void => mount', animate(500)),
    ]),
  ],
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  formName = input<string>();
  mount = output<string | undefined>();
  formState = 'mount';
  isMounted = true;
  backgroundClick() {
    this.formState = 'unmount';
    setTimeout(() => {
      this.isMounted = false;
      this.mount.emit(this.formName());
    }, 500);
  }
}
