import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {postsType} from "../../redux/State";


export type ProfilePropsType = {
    posts: Array<postsType>
    addPost: () => void
    updateNewPost: (newTextPost: string) => void
    newTextPost: string
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} updateNewPost={props.updateNewPost}
                     newTextPost={props.newTextPost}/>
        </div>
    )
}

export default Profile;