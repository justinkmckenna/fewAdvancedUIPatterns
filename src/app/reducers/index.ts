import { createSelector } from '@ngrx/store';
import * as fromHomeRepairs from './home-repairs.reducer';

export interface AppState {
  homeRepairs: fromHomeRepairs.HomeRepairState
}

export const reducers = {
  homeRepairs: fromHomeRepairs.reducer
}

const selectHomeRepairs = (state: AppState) => state.homeRepairs;

const { selectAll: selectAllHomeRepairsArray } = fromHomeRepairs.adapter.getSelectors(selectHomeRepairs);

export const selectAllHomeRepairs = createSelector(
  selectAllHomeRepairsArray,
  a => a
)
