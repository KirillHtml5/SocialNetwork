import {addMessageActionType, updateMessageActionType} from './dialogs-reducer';
import {profilePageType} from "./store";


export type addActionType = {
    type: "ADD-POST",
}
export type updateActionType = {
    type: "UPDATE-TEXT-POST",
    newTextPost: string
}

export type ActionType = addActionType | updateActionType | addMessageActionType | updateMessageActionType

const initialState = {
    posts: [
        {id: "1", message: "Hi, my name Kirill", likeCount: "15"},
        {id: "2", message: "I am 24", likeCount: "20"},
        {id: "3", message: "I am work", likeCount: "5"}
    ],
    newTextPost: ''
}

const profileReducer = (state: profilePageType = initialState, action: ActionType): profilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: '4',
                message: state.newTextPost,
                likeCount: '0',
            };
            let stateCopy = {...state};
            stateCopy.posts = [...stateCopy.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newTextPost = '';
            return stateCopy;
        }
        case "UPDATE-TEXT-POST": {
            let stateCopy = {...state};
            stateCopy.posts = [...stateCopy.posts];
            stateCopy.newTextPost = action.newTextPost;
            return stateCopy;
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