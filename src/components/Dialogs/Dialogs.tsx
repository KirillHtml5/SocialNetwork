import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog";
import Message from "./Message";

export const Dialogs = () => {
    let dialogs = [
        {id: "1", name: "Kirill"},
        {id: "2", name: "Natasha"},
        {id: "3", name: "Nikita"},
        {id: "4", name: "Father"},
        {id: "5", name: "Mother"}
    ]
    let messages = [
        {id: "1", mes: "Hi"},
        {id: "2", mes: "How are you?"},
        {id: "3", mes: "Yo"},
        {id: "4", mes: "Yooo"},
        {id: "5", mes: "YYooo"}
    ]

    let dialogsElement = dialogs.map(d => <Dialog name={d.name} id={d.id}/>)
    let messagesElement = messages.map(m => <Message message={m.mes} id={m.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>

        </div>
    )
}

