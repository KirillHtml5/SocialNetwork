import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, postsType} from "../../redux/State";


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