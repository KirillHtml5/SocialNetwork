import {addMessageActionType, updateMessageActionType} from './dialogs-reducer';
import {postsType} from "./store";
import {followActionType, setUsersActionType, unfollowActionType} from "./users-reducer";
import {ProfileType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {profileAPI} from "../api/Api";
import {isFetchingActionType} from "./auth-reducer";


export type addActionType = {
    type: "ADD-POST",
}
export type setUserProfileActionType = {
    type: "SET-USER-PROFILE",
    profile: ProfileType,
}
export type updateActionType = {
    type: "UPDATE-TEXT-POST",
    newTextPost: string
}

export type ProfilePagesType = {
    posts: Array<postsType>,
    newTextPost: string,
    profile: ProfileType,
    isFetching: boolean,
}

export type ActionType = addActionType
    | updateActionType
    | addMessageActionType
    | updateMessageActionType
    | followActionType
    | unfollowActionType
    | setUsersActionType
    | setUserProfileActionType
    | isFetchingActionType

const profileState = {
    aboutMe: '',
    contacts: {
        facebook: '',
        website: '',
        vk: '',
        twitter: '',
        instagram: '',
        youtube: '',
        github: '',
        mainLink: ''
    },
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    userId: 1,
    photos: {
        small: '',
        large: ''
    }
}

const initialState: InitialStateType = {
    posts: [
        {id: "1", message: "Hi, my name Kirill", likeCount: "15"},
        {id: "2", message: "I am 24", likeCount: "20"},
        {id: "3", message: "I am work", likeCount: "5"}
    ],
    newTextPost: '',
    profile: profileState,
    isFetching: false,
}

export type InitialStateType = ProfilePagesType

const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: '4',
                message: state.newTextPost,
                likeCount: '0',
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newTextPost: ''
            };
        }
        case "UPDATE-TEXT-POST": {
            return {
                ...state,
                newTextPost: action.newTextPost
            };
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SET-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;

    }

};


export const addPostAC = (): addActionType => {
    return {type: "ADD-POST"}
}
export const updatePostAC = (newTextPost: string): updateActionType => {
    return {type: "UPDATE-TEXT-POST", newTextPost}
}
export const setUserProfile = (profile: ProfileType): setUserProfileActionType => {
    return {type: "SET-USER-PROFILE", profile}
}
export const isFetchingAC = (isFetching: boolean): isFetchingActionType => {
    return {type: "SET-IS-FETCHING", isFetching}
}

export const getProfileTC = (userId: string) => (dispatch: Dispatch) => {
    dispatch(isFetchingAC(true))
    profileAPI.getProfile(userId)
        .then((response) => {
            dispatch(isFetchingAC(false))
            dispatch(setUserProfile(response.data))

            console.log('getProfile', response.data)
        })
}
export default profileReducer;