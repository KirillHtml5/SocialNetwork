import profileReducer, {ActionType} from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {usersType} from "./users-reducer";

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
export type profilePageType = {
    posts: Array<postsType>
    newTextPost: string
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
    usersPage: {
        users: Array<usersType>,
        totalCount: number,
        error: string
    }
}

export type storeType = typeof store


export const store = {
    _state: {
        profilePage: {
            posts: [
                {id: "1", message: "Hi, my name Kirill", likeCount: "15"},
                {id: "2", message: "I am 24", likeCount: "20"},
                {id: "3", message: "I am work", likeCount: "5"}
            ],
            newTextPost: ''
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
        },
        usersPage: {
            users: [],
            totalCount: 0,
            error: ''
        },
        //     users: [
        //         {
        //             id: '1',
        //             photoUrl: 'https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg',
        //             followed: true,
        //             fullName: 'Kirill',
        //             status: 'I am a student',
        //             location: {city: 'Minsk', country: 'Belarus'}
        //         },
        //         {
        //             id: '2',
        //             photoUrl: 'https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg',
        //             followed: true,
        //             fullName: 'Natasha',
        //             status: 'I am a wife',
        //             location: {city: 'Minsk', country: 'Belarus'}
        //         },
        //         {
        //             id: '3',
        //             photoUrl: 'https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg',
        //             followed: false,
        //             fullName: 'Nikita',
        //             status: 'I am a children',
        //             location: {city: 'Gorky', country: 'Belarus'}
        //         },
        //         {
        //             id: '4',
        //             photoUrl: 'https://bipbap.ru/wp-content/uploads/2021/07/modnye-avatarki-dlya-vk_0.jpg',
        //             followed: false,
        //             fullName: 'Liza',
        //             status: 'I am a girl',
        //             location: {city: 'Minsk', country: 'Belarus'}
        //         },
        //
        //     ]
        // },
        sidebar: {}
    },
    _callSubscriber(state: StateType) {
        alert('State changed')
    },

    getState() {
        return this._state
    },
    // subscribe(observer: rerenderType) {
    //     this._callSubscriber = observer
    // },

    dispatch(action: ActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        // this._state.usersPage = usersReducer(this._state.usersPage, action);
        this._callSubscriber(this._state);
    },

}


// @ts-ignore
window.store = store