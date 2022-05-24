import {rerenderType} from "../index";

export type dialogsType = {
    id: string
    name: string
}
export type messagesType = {
    id: string
    mes: string
}
export type postsType = {
    id: string
    message: string
    likeCount: string
}
export type dialogsPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    newTextMessage: string
}

export type StateType = {
    profilePage: {
        posts: Array<postsType>
        newTextPost: string
    }
    dialogsPage: {
        dialogs: Array<dialogsType>
        messages: Array<messagesType>
        newTextMessage: string
    }
}

export type storeType = typeof store

export type addActionType = {
    type: "ADD-POST",
}
export type updateActionType = {
    type: "UPDATE-TEXT-POST",
    newTextPost: string
}
export type addMessageActionType = {
    type: "ADD-MESSAGE",
}
export type updateMessageActionType = {
    type: "UPDATE-TEXT-MESSAGE",
    newTextMessage: string
}
export type ActionType = addActionType | updateActionType | addMessageActionType | updateMessageActionType

export const store = {
    _state: {
        profilePage: {
            posts: [
                {id: "1", message: "Hi, my name Kirill", likeCount: "15"},
                {id: "2", message: "I am 24", likeCount: "20"},
                {id: "3", message: "I am work", likeCount: "5"}
            ],
            newTextPost: 'kirill'
        },
        dialogsPage: {
            dialogs: [
                {id: "1", name: "Kirill"},
                {id: "2", name: "Natasha"},
                {id: "3", name: "Nikita"},
                {id: "4", name: "Father"},
                {id: "5", name: "Mother"}
            ],
            messages: [
                {id: "1", mes: "Hi"},
                {id: "2", mes: "How are you?"},
                {id: "3", mes: "Yo"},
                {id: "4", mes: "Yooo"},
                {id: "5", mes: "YYooo"}
            ],
            newTextMessage: ''
        }
    },
    _callSubscriber(state: StateType) {
        alert('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer: rerenderType) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionType) {
        if (action.type === "ADD-POST") {

            let newPost = {
                id: '4',
                message: this._state.profilePage.newTextPost,
                likeCount: '0',
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newTextPost = ''
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-TEXT-POST") {

            this._state.profilePage.newTextPost = action.newTextPost;
            this._callSubscriber(this._state);
        } else if (action.type === "ADD-MESSAGE") {

            let newMessage = {
                id: '6',
                mes: this._state.dialogsPage.newTextMessage,

            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newTextMessage = ''
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-TEXT-MESSAGE") {

            this._state.dialogsPage.newTextMessage = action.newTextMessage;
            this._callSubscriber(this._state);
        }
    },

}

export const addPostAC = (): addActionType => {
    return {type: "ADD-POST"}
}
export const updatePostAC = (newTextPost: string): updateActionType => {
    return {type: "UPDATE-TEXT-POST", newTextPost}
}
export const addMessageAC = (): addMessageActionType => {
    return {type: "ADD-MESSAGE"}
}
export const updateMessageAC = (newTextMessage: string): updateMessageActionType => {
    return {type: "UPDATE-TEXT-MESSAGE", newTextMessage}
}

// @ts-ignore
window.store = store