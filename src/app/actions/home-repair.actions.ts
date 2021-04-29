import { createAction, props } from "@ngrx/store";
import { HomeRepairModel } from "../models";

let id = 99;

export const itemAdded = createAction(
  '[home-repair] item added',
  ({ item, project, completed, assignedTo }: ItemAddRequest) => ({
    payload: {
      id: `t${id++}`,
      item,
      project,
      completed,
      assignedTo
    } as HomeRepairModel
  })
);

export const newItemRequestSuccess = createAction(
  '[home-repair] new item request success',
  props<{ item: HomeRepairModel, oldId: string }>()
);

export interface ItemAddRequest {
  item: string,
  project?: string,
  completed: boolean,
  assignedTo: string
}
