import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    initialStateType, isFetchingAC, isFollowingAC,
    setCurrentPageAC, setTotalCountAC,
    setUsersAC,
    unfollowAC,
    userType
} from "../../redux/users-reducer";
import {rootReducerType} from "../../redux/redux-store";
import Users from "./Users";
import {Preloader} from "../../comman/preloader/Preloader";
import {usersAPI} from "../../api/Api";

type MapStatePropsType = {
    usersPage: initialStateType
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    isFetching: (isFetching: boolean) => void
    isFollowing: (isFollowing: boolean, userId: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component <UsersPropsType, rootReducerType> {
    componentDidMount() {
        if (this.props.usersPage.users.length === 0) {
            this.props.isFetching(true)
            usersAPI.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
                .then((data) => {
                    this.props.isFetching(false)
                    this.props.setUsers(data.items)
                    this.props.setTotalCount(data.totalCount)
                    console.log(data.items)
                })
        }
    }

    onPageChange = (page: number) => {

        this.props.setCurrentPage(page)
        this.props.isFetching(true)
        usersAPI.getUsers(page, this.props.usersPage.pageSize)
            .then((data) => {
                this.props.isFetching(false)
                this.props.setUsers(data.items)
                console.log(data.items)
            })
    }


    render() {


        return (
            <>
                {this.props.usersPage.isFetching ? <Preloader/> : null}

                <Users users={this.props.usersPage.users}
                       totalCount={this.props.usersPage.totalCount}
                       currentPage={this.props.usersPage.currentPage}
                       pageSize={this.props.usersPage.pageSize}
                       onPageChange={this.onPageChange}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       isFollowing={this.props.isFollowing}
                       followInProgress={this.props.usersPage.followingInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state: rootReducerType): MapStatePropsType => {
    return {
        usersPage: state.usersPage

    }
}

export default connect(mapStateToProps,
    {
        follow: followAC,
        unfollow: unfollowAC,
        setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        setTotalCount: setTotalCountAC,
        isFetching: isFetchingAC,
        isFollowing: isFollowingAC
    })(UsersContainer)