import {addMessageActionType, updateMessageActionType} from './dialogs-reducer';
import {postsType} from "./store";
import {followActionType, setUsersActionType, unfollowActionType} from "./users-reducer";


export type addActionType = {
    type: "ADD-POST",
}
export type updateActionType = {
    type: "UPDATE-TEXT-POST",
    newTextPost: string
}

export type ActionType = addActionType
    | updateActionType
    | addMessageActionType
    | updateMessageActionType
    | followActionType
    | unfollowActionType
    | setUsersActionType

const initialState = {
    posts: [
        {id: "1", message: "Hi, my name Kirill", likeCount: "15"},
        {id: "2", message: "I am 24", likeCount: "20"},
        {id: "3", message: "I am work", likeCount: "5"}
    ] as Array<postsType>,
    newTextPost: ''
}

export type InitialStateType = typeof initialState

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
export default profileReducer;