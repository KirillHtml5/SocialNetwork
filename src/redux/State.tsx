import {Rerender} from "../rerender";

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

export type StateType = {
    profilePage: {
        posts: Array<postsType>
        newTextPost: string
    }
    dialogsPage: {
        dialogs: Array<dialogsType>
        messages: Array<messagesType>
    }
}
// export type StateType = ReturnType<typeof State>


export const addPost = () => {
    let newPost = {
        id: '4',
        message: State.profilePage.newTextPost,
        likeCount: '0',
    };
    State.profilePage.posts.push(newPost);
    State.profilePage.newTextPost = ''
    Rerender(State);
}

export const updateNewPost = (newTextPost: string) => {

    State.profilePage.newTextPost = newTextPost;
    Rerender(State);
}

export const State = {
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
        ]
    }
}

