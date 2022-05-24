import React, {useRef} from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {ActionType, addMessageAC, dialogsType, messagesType, updateMessageAC} from "../../redux/State";


export type DialogsPropsType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
    dispatch: (action: ActionType) => void
    newTextMessage: string

}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogs.map(d => <Dialog name={d.name} id={d.id}/>)
    let messagesElement = props.messages.map(m => <Message message={m.mes} id={m.id}/>)

    const newMessageElement = useRef<HTMLTextAreaElement>(null);

    const addMessageButton = () => {
        props.dispatch(addMessageAC())
    }
    const changeMessage = () => {
        if (newMessageElement.current !== null) {
            let text = newMessageElement.current.value;
            props.dispatch(updateMessageAC(text))
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div>
                <textarea ref={newMessageElement}
                          onChange={changeMessage}
                          value={props.newTextMessage}
                />
            </div>
            <div>
                <button onClick={addMessageButton}>Add message</button>
            </div>


        </div>
    )
}

