import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from 'react-redux';
import {rootReducerType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";


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
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void

}
type userId = {
    userId: string
}


export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType
export type ProfilePropsType2 = MapStatePropsType & MapDispatchPropsType & userId


class ProfileContainer extends React.Component<ProfilePropsType2, rootReducerType> {
    componentDidMount() {
        let userId = this.props.userId
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

const WithRouterComponent = (props: ProfilePropsType) => {
    const params = useParams();
    return (
        <ProfileContainer
            {...props} // Пропсы из mapStateToProps, {setUserProfile}
            userId={params.userId ? params.userId : '2'} // Если такого userId нету, то отобразить 2
        />
    );
}

export default connect(mapStateToProps, {setUserProfile})(WithRouterComponent);