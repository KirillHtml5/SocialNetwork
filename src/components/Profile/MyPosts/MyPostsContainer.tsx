import React from 'react';
import {addPostAC, InitialStateType, updatePostAC} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {rootReducerType} from "../../../redux/redux-store";


type MapStatePropsType = {
    profilePage: InitialStateType
}

type MapDispatchPropsType = {
    updatePost: (text: string) => void
    addPost: () => void

}

export type PostsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: rootReducerType): MapStatePropsType => {
    return {
        profilePage: state.profilePage

    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updatePost: (text: string) => {
            dispatch(updatePostAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;