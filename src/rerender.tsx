import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, StateType, updateNewPost} from "./redux/State";

export const Rerender = (State: StateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={State} addPost={addPost} updateNewPost={updateNewPost}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
};

