import {Dispatch} from "redux";
import {authAPI} from "../api/Api";

export type setUserActionType = {
    type: "SET-USER-DATA",
    data: userDataType
}
export type unfollowActionType = {
    type: "UNFOLLOW",
    userId: number
}
export type userDataType = {
    id: null,
    email: null,
    login: null,
}
export type isFetchingActionType = {
    type: "SET-IS-FETCHING",
    isFetching: boolean
}

export type AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: boolean,
    isFetching: boolean,
}


export type ActionType = setUserActionType | isFetchingActionType

export type initialStateType = AuthType

const initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
}

const authReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case "SET-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;

    }

};


export const setUserDataAC = (data: userDataType): setUserActionType => {
    return {type: "SET-USER-DATA", data}
}

export const isFetchingAC = (isFetching: boolean): isFetchingActionType => {
    return {type: "SET-IS-FETCHING", isFetching}
}

export const getMeTC = () => (dispatch: Dispatch) => {
    dispatch(isFetchingAC(true))
    authAPI.getMe()
        .then((response) => {
            dispatch(isFetchingAC(false))
            if (response.data.resultCode === 0) {
                dispatch(setUserDataAC(response.data.data))
            }
            console.log('me', response.data.data)
        })
}
export default authReducer;