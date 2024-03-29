import React from 'react';
import {addMessageAC, InitialStateType, updateMessageAC} from '../../redux/dialogs-reducer';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {rootReducerType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/AuthRedirect";


type MapStatePropsType = {
    dialogsPage: InitialStateType,
    isAuth: boolean
}

type MapDispatchPropsType = {
    updateMessage: (text: string) => void
    addMessage: () => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: rootReducerType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateMessage: (text: string) => {
            dispatch(updateMessageAC(text))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }

}


export const DialogsContainer = compose<React.ComponentType>(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs)