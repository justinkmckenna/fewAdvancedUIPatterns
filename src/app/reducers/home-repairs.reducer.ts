import { Action, createReducer, on } from "@ngrx/store";
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { HomeRepairModel } from "../models";
import * as actions from '../actions/home-repair.actions';

export interface HomeRepairState extends EntityState<HomeRepairModel> {

}

export const adapter = createEntityAdapter<HomeRepairModel>();

const initialState: HomeRepairState = {
  ids: ['1', '2'],
  entities: {
    '1': { id: '1', item: 'clean garage', assignedTo: 'ahhhh@ah.com', completed: false },
    '2': { id: '2', item: 'destroy garage', assignedTo: 'ahhhh@ah.com', completed: true }
  }
}

const myReducer = createReducer(
  initialState,
  on(actions.itemAdded, (s, a) => adapter.addOne(a.payload, s)),
  on(actions.newItemRequestSuccess, (s, a) => adapter.updateOne({
    id: a.oldId,
    changes: { id: `${a.item.id}` }
  }, s))
)

export function reducer(state: HomeRepairState, action: Action): HomeRepairState {
  return myReducer(state, action);
}
