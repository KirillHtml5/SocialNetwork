import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog";
import Message from "./Message";

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name={"Kirill"} id={"1"}/>
                <Dialog name={"Natasha"} id={"2"}/>
                <Dialog name={"Nikita"} id={"3"}/>
                <Dialog name={"Father"} id={"4"}/>
                <Dialog name={"Mother"} id={"5"}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"How are you?"}/>
                <Message message={"Yo"}/>
                <Message message={"Yo"}/>
                <Message message={"Yo"}/>
            </div>

        </div>
    )
}

