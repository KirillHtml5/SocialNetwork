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
import {rootReducerType} from "../../redux/redux-store";
import axios from "axios";
import Users from "./Users";

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

class UsersContain extends React.Component <UsersPropsType, rootReducerType> {
    componentDidMount() {
        if (this.props.usersPage.users.length === 0) {

            axios.get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
                .then((res) => {
                    this.props.setUsers(res.data.items)
                    this.props.setTotalCount(res.data.totalCount)
                    console.log(res.data.items)
                })
        }
    }

    onPageChange = (page: number) => {
        this.props.setCurrentPage(page)

        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPage.pageSize}`)
            .then((res) => {
                this.props.setUsers(res.data.items)
                console.log(res.data.items)
            })
    }


    render() {


        return (
            <Users users={this.props.usersPage.users}
                   totalCount={this.props.usersPage.totalCount}
                   currentPage={this.props.usersPage.currentPage}
                   pageSize={this.props.usersPage.pageSize}
                   onPageChange={this.onPageChange}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        )
    }
}

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


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContain)