import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {rootReducerType, store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


export type rerenderType = typeof Rerender

const Rerender = (State: rootReducerType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={State} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
};

Rerender(store.getState());
store.subscribe(() => {
    const state = store.getState();
    Rerender(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
