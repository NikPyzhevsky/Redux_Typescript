// export for storeState.ts and for reducer
export interface ITodoAppState {
    list: Array<{ id: number; item: string; done: boolean }>;
}




//Actions constants
export enum Constants {
    DELETE_ITEM,
    ADD_ITEM,
    CHANGE_STATUS,
}



// these interfaces are actions

export interface IAddItem {
    type: Constants.ADD_ITEM;
    value: string;
}

export interface IDeleteItem {
    type: Constants.DELETE_ITEM;
    index: number;
}

export interface IChangeStatus {
    type: Constants.CHANGE_STATUS;
    index: number;
}



// define actions with interfaces for the reducer
export type Actions = IAddItem | IDeleteItem | IChangeStatus;



// defining redux store state
export interface IStoreState {
    toDoApp: ITodoAppState;
}
