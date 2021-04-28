import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeRepairModel } from 'src/app/models';

@Component({
  selector: 'app-home-repair-entry',
  templateUrl: './home-repair-entry.component.html',
  styleUrls: ['./home-repair-entry.component.css']
})
export class HomeRepairEntryComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<HomeRepairModel>();
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      item: ['', [Validators.required, Validators.minLength(10)]],
      project: ['Kitchen', []],
      completed: [false, []],
      assignedTo: ['', [Validators.required, Validators.email, Validators.minLength(3)]]
    })
  }

  get item(): AbstractControl { return this.form.get('item'); }
  get project(): AbstractControl { return this.form.get('project'); }
  get completed(): AbstractControl { return this.form.get('completed'); }
  get assignedTo(): AbstractControl { return this.form.get('assignedTo'); }

  getErrorMessage(control: AbstractControl) {
    if (control.errors.required) {
      return 'Required. ';
    } else if (control.errors.minlength) {
      return `Min length is ${control.errors.minlength.requiredLength}. `;
    } else if (control.errors.email) {
      return 'Invalid email. ';
    } else {
      return 'No clue, good luck. ';
    }
  }

  submit() {
    if (this.form.valid) {
      this.itemAdded.emit(this.form.value);
    } else {
      console.log('invalid form');
    }
  }

}
