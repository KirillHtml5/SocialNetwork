import {addMessageActionType, updateMessageActionType} from "./dialogs-reducer";
import {addActionType, updateActionType} from "./profile-reducer";
import {Dispatch} from "redux";
import {usersAPI} from "../api/Api";

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
export type isFollowingActionType = {
    type: "SET-IS-FOLLOWING",
    isFollowing: boolean,
    userId: number
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
    followingInProgress: number[],
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
    | isFollowingActionType

export type initialStateType = UsersPageType

const initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    error: '',
    isFetching: false,
    followingInProgress: [],
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
        case "SET-IS-FOLLOWING": {
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
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
export const isFollowingAC = (isFollowing: boolean, userId: number): isFollowingActionType => {
    return {type: "SET-IS-FOLLOWING", isFollowing, userId}
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(isFetchingAC(true))
    usersAPI.getUsers(currentPage, pageSize)
        .then((data) => {
            dispatch(isFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(setTotalCountAC(data.totalCount))
            console.log(data.items)
        })
}
export const unFollowTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(isFollowingAC(true, userId))
    usersAPI.unfollowUser(userId)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(unfollowAC(userId))
                console.log(data)
            }
            dispatch(isFollowingAC(false, userId))
        })
}
export const followTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(isFollowingAC(true, userId))
    usersAPI.followUser(userId)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(followAC(userId))
                console.log(data)
            }
            dispatch(isFollowingAC(false, userId))
        })
}

export default usersReducer;