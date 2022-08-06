import React from 'react';
import Profile from "./Profile";
import {connect} from 'react-redux';
import {rootReducerType} from "../../redux/redux-store";
import {getProfileTC} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from 'redux';


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
    profile: ProfileType,
    isAuth: boolean
}
type MapDispatchPropsType = {
    // setUserProfile: (profile: ProfileType) => void
    getProfileTC: (userId: string) => void

}
type userId = {
    userId: string
}


export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType
export type ProfilePropsType2 = MapStatePropsType & MapDispatchPropsType & userId


class ProfileContainer extends React.Component<ProfilePropsType2, rootReducerType> {
    componentDidMount() {
        let userId = this.props.userId
        this.props.getProfileTC(userId)

    }

    render() {

        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

// const AuthRedirectComponent=(props: any)=>{
//     if (!this.props.isAuth) return <Navigate to={"/login"}/>
//     return <ProfileContainer {...props}/>
//     }

let mapStateToProps = (state: rootReducerType): MapStatePropsType => {

    return {

        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth

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

export default compose<React.ComponentType>(withAuthRedirect, connect(mapStateToProps, {getProfileTC}))(WithRouterComponent);