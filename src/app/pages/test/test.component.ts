import { Component } from '@angular/core';
import { ButtonsComponent } from '../../shared/buttons/buttons.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ButtonsComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {}
