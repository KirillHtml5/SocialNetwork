import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from 'react-redux';
import {rootReducerType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";

export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

type MapStatePropsType = {
    profile: ProfileType
}

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {

        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((res) => {
                this.props.setUserProfile(res.data)

                console.log(res.data)
            })
    }

    render() {

        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: rootReducerType): MapStatePropsType => {

    return {

        profile: state.profilePage.profile

    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);