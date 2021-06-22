import { Constants, Actions, ITodoAppState } from "../types/TodoListTypes"



// initial state if needed
const initialState: ITodoAppState = {
  list: [
    { id: 0, item: 'Sleep', done: false },
    { id: 1, item: 'Get some fun', done: true },
    { id: 2, item: 'Walk', done: false },
    { id: 3, item: 'Go gome', done: false },
  ],
};


export default function reducer(
  state: ITodoAppState = initialState,
  action: Actions
): ITodoAppState {
  switch (action.type) {
    case Constants.DELETE_ITEM:
      const newList = state.list
      newList.splice(action.index, 1);
      newList.map((item, index) => {
        item.id = index
      })
      console.log(action.index)
      return {
        ...state, list: [...newList]

      };
    case Constants.ADD_ITEM:
      return {
        ...state, list: [...state.list, { item: action.value, done: false, id: state.list.length }]
      }
    case Constants.CHANGE_STATUS:
      const ItemToChange = state.list
      ItemToChange[action.index].done = !ItemToChange[action.index].done

      return {
        ...state, list: [...ItemToChange]
      }
    default:
      return state;
  }
}