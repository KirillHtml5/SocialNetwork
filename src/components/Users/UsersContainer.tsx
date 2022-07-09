import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    followAC,
    initialStateType,
    setCurrentPageAC, setTotalCountAC,
    setUsersAC,
    unfollowAC,
    userType
} from "../../redux/users-reducer";
import Users from "./Users";
import {rootReducerType} from "../../redux/redux-store";

type MapStatePropsType = {
    usersPage: initialStateType
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: rootReducerType): MapStatePropsType => {
    return {
        usersPage: state.usersPage

    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<userType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        }
    }

}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)