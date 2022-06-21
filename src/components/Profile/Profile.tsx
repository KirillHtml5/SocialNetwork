import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType} from "../../redux/profile-reducer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StateType} from "../../redux/store";


// export type ProfilePropsType = {
//     state: StateType
//     dispatch: (action: ActionType) => void
// }

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;