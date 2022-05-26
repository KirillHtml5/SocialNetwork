import {dialogsPageType} from "./State";
import {addActionType, updateActionType} from "./profile-reducer";


export type addMessageActionType = {
    type: "ADD-MESSAGE",
}
export type updateMessageActionType = {
    type: "UPDATE-TEXT-MESSAGE",
    newTextMessage: string
}
export type ActionType = addActionType | updateActionType | addMessageActionType | updateMessageActionType

const dialogsReducer = (state: dialogsPageType, action: ActionType) => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            let newMessage = {
                id: '6',
                mes: state.newTextMessage,

            };
            state.messages.push(newMessage);
            state.newTextMessage = '';
            return state;
        }
        case "UPDATE-TEXT-MESSAGE": {
            state.newTextMessage = action.newTextMessage;
            return state;
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