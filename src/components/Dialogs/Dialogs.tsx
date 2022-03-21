import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog";
import Message from "./Message";

export const Dialogs = () => {
    let dialogsData = [
        {id: "1", name: "Kirill"},
        {id: "2", name: "Natasha"},
        {id: "3", name: "Nikita"},
        {id: "4", name: "Father"},
        {id: "5", name: "Mother"}
    ]
    let messagesData = [
        {id: "1", mes: "Hi"},
        {id: "2", mes: "How are you?"},
        {id: "3", mes: "Yo"},
        {id: "4", mes: "Yooo"},
        {id: "5", mes: "YYooo"}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
                <Dialog name={dialogsData[4].name} id={dialogsData[4].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].mes} id={messagesData[0].id}/>
                <Message message={messagesData[1].mes} id={messagesData[1].id}/>
                <Message message={messagesData[2].mes} id={messagesData[2].id}/>
                <Message message={messagesData[3].mes} id={messagesData[3].id}/>
                <Message message={messagesData[4].mes} id={messagesData[4].id}/>

            </div>

        </div>
    )
}

