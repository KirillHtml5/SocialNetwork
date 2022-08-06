import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";



export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogsPage.dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)
    let messagesElement = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.mes} id={m.id}/>)
    let newTextMessage = props.dialogsPage.newTextMessage


    const addMessageButton = () => {
        props.addMessage()
    }
    const changeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {

        let text = event.currentTarget.value;
        props.updateMessage(text)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                <textarea onChange={changeMessage}
                          value={newTextMessage}
                          placeholder={'Enter your message'}
                />
                </div>
                <div>
                    <button onClick={addMessageButton}>Add message</button>
                </div>
            </div>
        </div>
    )
}
