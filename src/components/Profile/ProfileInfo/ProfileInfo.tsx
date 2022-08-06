import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../ProfileContainer";

import userPhoto from "../../../assets/images/user.png";

export type ProfileInfoPropsType = {
    profile: ProfileType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    // if (!props.profile.photos.large) {
    //     return <Preloader/>
    // }

    return (
        <div>
            <div>
                <img
                    src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}/>
                <h3>{props.profile.fullName}</h3>
                <div>
                    <h4>about me:</h4>
                    {props.profile.aboutMe}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;