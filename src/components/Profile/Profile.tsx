import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postsType} from "../../redux/State";
import {ActionType} from "../../redux/profile-reducer";


export type ProfilePropsType = {
    posts: Array<postsType>
    dispatch: (action: ActionType) => void
    newTextPost: string
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} dispatch={props.dispatch} newTextPost={props.newTextPost}/>
        </div>
    )
}

export default Profile;