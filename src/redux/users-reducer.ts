import {addMessageActionType, updateMessageActionType} from "./dialogs-reducer";
import {addActionType, updateActionType} from "./profile-reducer";

export type followActionType = {
    type: "FOLLOW",
    userId: string
}
export type unfollowActionType = {
    type: "UNFOLLOW",
    userId: string
}
export type setUsersActionType = {
    type: "SET-USERS",
    users: Array<usersType>

}
export type usersType = {
    id: string,
    photoUrl: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: { city: string, country: string }
}
export type UsersPageType = {
    users: usersType[]
}


export type ActionType = addActionType
    | updateActionType
    | addMessageActionType
    | updateMessageActionType
    |followActionType
    | unfollowActionType
    | setUsersActionType

export type initialStateType = typeof initialState

const initialState: UsersPageType = {
    users: []
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


export const followAC = (userId: string): followActionType => {
    return {type: "FOLLOW", userId}
}
export const unfollowAC = (userId: string): unfollowActionType => {
    return {type: "UNFOLLOW", userId}
}
export const setUsersAC = (users: Array<usersType>): setUsersActionType => {
    return {type: "SET-USERS", users}
}
export default usersReducer;