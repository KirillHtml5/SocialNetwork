import React from 'react';
import {StateType} from "../../../redux/store";
import {addPostAC, updatePostAC} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";


let mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newTextPost: state.profilePage.newTextPost
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
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