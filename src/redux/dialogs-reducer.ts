import {dialogsType, messagesType} from "./store";
import {addActionType, updateActionType} from "./profile-reducer";
import {followActionType, setUsersActionType, unfollowActionType} from "./users-reducer";


export type addMessageActionType = {
    type: "ADD-MESSAGE",
}
export type updateMessageActionType = {
    type: "UPDATE-TEXT-MESSAGE",
    newTextMessage: string
}
export type ActionType = addActionType
    | updateActionType
    | addMessageActionType
    | updateMessageActionType
    | followActionType
    | unfollowActionType
    | setUsersActionType

const initialState = {
    dialogs: [
        {id: "1", name: "Kirill"},
        {id: "2", name: "Natasha"},
        {id: "3", name: "Nikita"},
        {id: "4", name: "Father"},
        {id: "5", name: "Mother"}
    ] as Array<dialogsType>,
    messages: [
        {id: "1", mes: "Hi"},
        {id: "2", mes: "How are you?"},
        {id: "3", mes: "Yo"},
        {id: "4", mes: "Yooo"},
        {id: "5", mes: "YYooo"}
    ] as Array<messagesType>,
    newTextMessage: ''
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            let newMessage = {
                id: '6',
                mes: state.newTextMessage,

            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newTextMessage: ''
            };

        }
        case "UPDATE-TEXT-MESSAGE": {
            return {
                ...state,
                newTextMessage: action.newTextMessage
            };
        }
        default:
            return state;
    }
};

export const addMessageAC = (): addMessageActionType => {
    return {type: "ADD-MESSAGE"}
}
export const updateMessageAC = (newTextMessage: string): updateMessageActionType => {
    return {type: "UPDATE-TEXT-MESSAGE", newTextMessage}
}

export default dialogsReducer;