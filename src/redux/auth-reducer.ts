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
// export type isFetchingActionType = {
//     type: "SET-IS-FETCHING",
//     isFetching: boolean
// }

export type AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: boolean,
}


export type ActionType = setUserActionType

export type initialStateType = AuthType

const initialState: initialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
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
        default:
            return state;

    }

};


export const setUserDataAC = (data: userDataType): setUserActionType => {
    return {type: "SET-USER-DATA", data}
}

// export const isFetchingAC = (isFetching: boolean): isFetchingActionType => {
//     return {type: "SET-IS-FETCHING", isFetching}
// }
export default authReducer;