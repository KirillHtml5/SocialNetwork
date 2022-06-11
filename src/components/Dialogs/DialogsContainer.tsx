import React from 'react';
import {StateType} from "../../redux/store";
import {addMessageAC, updateMessageAC} from '../../redux/dialogs-reducer';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";


let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateMessage: (text: string) => {
            dispatch(updateMessageAC(text))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }

}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)