import { Action, createReducer, on } from "@ngrx/store";
import { HomeRepairModel } from "../models";
import * as actions from '../actions/item-form.actions';



export interface ItemFormTempState {
  value: HomeRepairModel
}



const initialState: ItemFormTempState = {
  value: null
}




const myReducer = createReducer(
  initialState,
  on(actions.updateData, (s, a) => ({ ...s, value: a.val })),
  on(actions.clearTempData, () => initialState)
)



export function reducer(state: ItemFormTempState, action: Action): ItemFormTempState {
  return myReducer(state, action);
}
