import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as actions from '../actions/home-repair.actions';
import { switchMap, map } from 'rxjs/operators';
import { HomeRepairModel } from "../models";

@Injectable()
export class HomeRepairEffects {

  saveItem$ = createEffect(() => this.actions$.pipe(
    ofType(actions.itemAdded),
    switchMap(a => this.client.post<HomeRepairModel>('http://localhost:5000/items', a.payload).pipe(
      map(res => actions.newItemRequestSuccess({ item: res, oldId: a.payload.id })))
    )
  ));

  constructor(private client: HttpClient, private actions$: Actions) { }
}
