import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { updateData } from 'src/app/actions/item-form.actions';
import { HomeRepairModel } from 'src/app/models';
import { AppState } from 'src/app/reducers';
import { ItemExistsValidator } from 'src/app/validators/itemexists.validator';

@Component({
  selector: 'app-home-repair-entry',
  templateUrl: './home-repair-entry.component.html',
  styleUrls: ['./home-repair-entry.component.css']
})
export class HomeRepairEntryComponent implements OnInit, OnDestroy {

  @Output() itemAdded = new EventEmitter<HomeRepairModel>();
  form: FormGroup;
  subscriptions: Subscription[] = [];
  constructor(private store: Store<AppState>, private formBuilder: FormBuilder, private itemExistsValidator: ItemExistsValidator) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      item: ['', [Validators.required, Validators.minLength(3), cannotBeJim], [this.itemExistsValidator]],
      project: ['Kitchen', [invalidProject('garage')]],
      completed: [false, []],
      assignedTo: ['', [Validators.required, Validators.email, Validators.minLength(3)]]
    }, {
      validators: henryDoesDishesRealBad(),
    })

    this.subscriptions.push(this.form.valueChanges.pipe(
      tap(val => this.store.dispatch(updateData({ val }))))
      .subscribe());

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
    } else if (control.errors.invalidProject) {
      return control.errors.invalidProject.message;
    } else if (control.errors.cannotBeJim) {
      return 'cannot be jim';
    } else if (control.errors.this.itemExistsValidator) {
      return 'item already exists';
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

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

}

export function invalidProject(project: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value === project) {
      return {
        invalidProject: { message: `${project} is not allowed` }
      };
    } else {
      return null;
    }
  }
}

export function cannotBeJim(control: AbstractControl): { [key: string]: any } | null {
  return control.value === 'jim' ? { cannotBeJim: true } : null;
}

function henryDoesDishesRealBad(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const who = control.get('assignedTo').value;
    const item = control.get('item').value;
    return who === 'henry@aol.com' && item === 'dishes' ? { henryDoesDishesRealBad: true } : null;
  }
}
