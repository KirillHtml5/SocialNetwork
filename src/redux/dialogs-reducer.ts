import {dialogsPageType} from "./store";
import {addActionType, updateActionType} from "./profile-reducer";


export type addMessageActionType = {
    type: "ADD-MESSAGE",
}
export type updateMessageActionType = {
    type: "UPDATE-TEXT-MESSAGE",
    newTextMessage: string
}
export type ActionType = addActionType | updateActionType | addMessageActionType | updateMessageActionType

const initialState = {
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

const dialogsReducer = (state: dialogsPageType = initialState, action: ActionType): dialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            let newMessage = {
                id: '6',
                mes: state.newTextMessage,

            };
            state.messages.push(newMessage);
            state.newTextMessage = '';
            return {...state};
        }
        case "UPDATE-TEXT-MESSAGE": {
            state.newTextMessage = action.newTextMessage;
            return {...state};
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