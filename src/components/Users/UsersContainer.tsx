import React from 'react';
import {StateType} from "../../redux/store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC, usersType} from "../../redux/users-reducer";


let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<usersType>) => {
            dispatch(setUsersAC(users))
        }
    }

}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)