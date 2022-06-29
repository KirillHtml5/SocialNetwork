import {addMessageActionType, updateMessageActionType} from "./dialogs-reducer";
import {addActionType, updateActionType} from "./profile-reducer";

export type followActionType = {
    type: "FOLLOW",
    userId: number
}
export type unfollowActionType = {
    type: "UNFOLLOW",
    userId: number
}
export type setUsersActionType = {
    type: "SET-USERS",
    users: Array<usersType>

}
export type usersType = {
    name: string,
    id: number,
    photos: {
        small?: string,
        large?: string,
    },
    status: string,
    followed: boolean
}
export type UsersPageType = {
    users: usersType[],
    totalCount: number,
    error: string
}


export type ActionType = addActionType
    | updateActionType
    | addMessageActionType
    | updateMessageActionType
    | followActionType
    | unfollowActionType
    | setUsersActionType

export type initialStateType = typeof initialState

const initialState: UsersPageType = {
    users: [],
    totalCount: 0,
    error: ''
}

const usersReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }

        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        }
        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;

    }

};


export const followAC = (userId: number): followActionType => {
    return {type: "FOLLOW", userId}
}
export const unfollowAC = (userId: number): unfollowActionType => {
    return {type: "UNFOLLOW", userId}
}
export const setUsersAC = (users: Array<usersType>): setUsersActionType => {
    return {type: "SET-USERS", users}
}
export default usersReducer;