import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { AppState, selectItemExists } from "../reducers";

@Injectable({ providedIn: 'root' })
export class ItemExistsValidator implements AsyncValidator {

  constructor(private store: Store<AppState>) { }

  validate(control: AbstractControl): Observable<ValidationErrors> {
    return this.store.select(selectItemExists).pipe(
      map(exists => { console.log(exists); return exists ? { itemExists: true } : null })
    )
  }

}
