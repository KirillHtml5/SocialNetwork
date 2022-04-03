import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogPropsType = {
    name: string
    id: string
}
const Dialog = (props: DialogPropsType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
};

export default Dialog;