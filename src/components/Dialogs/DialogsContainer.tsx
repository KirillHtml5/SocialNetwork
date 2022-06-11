import React from 'react';
import {StateType} from "../../redux/store";
import {ActionType, addMessageAC, updateMessageAC} from '../../redux/dialogs-reducer';
import {Dialogs} from "./Dialogs";


export type DialogsPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

export const DialogsContainer = (props: DialogsPropsType) => {
    let dialogsPage = props.state.dialogsPage

    const addMessageButton = () => {
        props.dispatch(addMessageAC())
    }
    const changeMessage = (text: string) => {

        props.dispatch(updateMessageAC(text))
    }

    return (
        <Dialogs dialogsPage={dialogsPage} updateMessage={changeMessage} addMessage={addMessageButton}/>
    )
}

