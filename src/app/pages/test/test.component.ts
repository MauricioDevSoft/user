import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonsComponent } from '../../shared/buttons/buttons.component';
import { InputComponent } from '../../shared/controls/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '../../shared/controls/form-field/form-field.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    ButtonsComponent,
    InputComponent,
    ReactiveFormsModule,
    FormFieldComponent,
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      input: [null],
    });
  }

  onPatchValue(): void {
    this.formGroup.patchValue({
      input: 'patched value',
    });
  }
  onSubmit(): void {
    console.log('QWERTY');
  }
}
