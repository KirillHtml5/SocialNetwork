import React from 'react';
import {connect} from "react-redux";
import {
    followTC, getUsersThunkCreator,
    initialStateType, isFollowingAC,
    setCurrentPageAC,
    unFollowTC
} from "../../redux/users-reducer";
import {rootReducerType} from "../../redux/redux-store";
import Users from "./Users";
import {Preloader} from "../../comman/preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/AuthRedirect";

type MapStatePropsType = {
    usersPage: initialStateType
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    isFollowing: (isFollowing: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component <UsersPropsType, rootReducerType> {
    componentDidMount() {
        if (this.props.usersPage.users.length === 0) {

            this.props.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)

        }
    }

    onPageChange = (page: number) => {

        this.props.setCurrentPage(page)

        this.props.getUsers(page, this.props.usersPage.pageSize)

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

export default compose<React.ComponentType>(withAuthRedirect, connect(mapStateToProps,
    {
        follow: followTC,
        unfollow: unFollowTC,
        setCurrentPage: setCurrentPageAC,
        isFollowing: isFollowingAC,
        getUsers: getUsersThunkCreator
    }))(UsersContainer)