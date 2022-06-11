import React from 'react';
import {postsType, StateType} from "../../../redux/store";
import {ActionType, addPostAC, updatePostAC} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";


export type MyPostsPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

const MyPostsContainer = (props: MyPostsPropsType) => {


    const addPostButton = () => {

        props.dispatch(addPostAC())

    }
    const changePost = (text: string) => {

        props.dispatch(updatePostAC(text))
    }

    return (
        <MyPosts posts={props.state.profilePage.posts}
                 newTextPost={props.state.profilePage.newTextPost}
                 updatePost={changePost}
                 addPost={addPostButton}/>
    )
}

export default MyPostsContainer;