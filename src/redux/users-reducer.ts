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
    users: Array<userType>

}
export type setCurrentPageActionType = {
    type: "SET-CURRENT-PAGE",
    currentPage: number

}
export type setTotalCountActionType = {
    type: "SET-TOTAL-COUNT",
    totalCount: number

}
export type isFetchingActionType = {
    type: "SET-IS-FETCHING",
    isFetching: boolean

}
export type userType = {
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
    users: userType[],
    pageSize: number,
    totalCount: number,
    currentPage: number,
    error: string,
    isFetching: boolean,
}


export type ActionType = addActionType
    | updateActionType
    | addMessageActionType
    | updateMessageActionType
    | followActionType
    | unfollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalCountActionType
    | isFetchingActionType

export type initialStateType = UsersPageType

const initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    error: '',
    isFetching: false,
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
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-COUNT": {
            return {...state, totalCount: action.totalCount}
        }
        case "SET-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
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
export const setUsersAC = (users: Array<userType>): setUsersActionType => {
    return {type: "SET-USERS", users}
}
export const setCurrentPageAC = (currentPage: number): setCurrentPageActionType => {
    return {type: "SET-CURRENT-PAGE", currentPage}
}
export const setTotalCountAC = (totalCount: number): setTotalCountActionType => {
    return {type: "SET-TOTAL-COUNT", totalCount}
}
export const isFetchingAC = (isFetching: boolean): isFetchingActionType => {
    return {type: "SET-IS-FETCHING", isFetching}
}
export default usersReducer;