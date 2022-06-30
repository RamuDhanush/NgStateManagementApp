import {Action} from '@ngrx/store';
import { UserListAction, ADD_USER } from './user-list.action'

const intialState = { userList: ["User1", "User2"] };

export function userListReducer(state = intialState, action: Action) {
    const userAction = action as UserListAction;
    switch (userAction.type) {
        case ADD_USER:
            return { ...state, userList: [...state.userList, userAction.payload] };
        default:
            return intialState;
    }
}