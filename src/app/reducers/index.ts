import { createSelector } from '@ngrx/store';
import * as fromHomeRepairs from './home-repairs.reducer';
import * as fromItemTemp from './item-form-temp.reducer';

export interface AppState {
  homeRepairs: fromHomeRepairs.HomeRepairState,
  itemFormTemp: fromItemTemp.ItemFormTempState
}

export const reducers = {
  homeRepairs: fromHomeRepairs.reducer,
  itemFormTemp: fromItemTemp.reducer
}

const selectHomeRepairs = (state: AppState) => state.homeRepairs;
const selectItemFormTemp = (state: AppState) => state.itemFormTemp;

const { selectAll: selectAllHomeRepairsArray } = fromHomeRepairs.adapter.getSelectors(selectHomeRepairs);

export const selectAllHomeRepairs = createSelector(
  selectAllHomeRepairsArray,
  a => a
)

const selectCurrentForm = createSelector(
  selectItemFormTemp,
  f => f.value
)

const selectCurrentFormItem = createSelector(
  selectCurrentForm,
  f => f?.item
)

export const selectItemExists = createSelector(
  selectAllHomeRepairsArray,
  selectCurrentFormItem,
  (repairs, item) => repairs?.some(repair => repair.item === item) || false
)
