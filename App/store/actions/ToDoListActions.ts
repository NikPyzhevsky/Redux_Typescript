import { Constants, IAddItem, IChangeStatus, IDeleteItem } from "../types/TodoListTypes"

// action creators


export const AddItem = (value: string): IAddItem => ({
  type: Constants.ADD_ITEM,
  value
});

export const ChangeStatus = (index: number): IChangeStatus => ({
  type: Constants.CHANGE_STATUS,
  index
});

export const DeleteItem = (index: number): IDeleteItem => ({
  type: Constants.DELETE_ITEM,
  index
});