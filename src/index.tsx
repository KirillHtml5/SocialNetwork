import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type dialogsType = {
    id: string
    name: string
}
export type messagesType = {
    id: string
    mes: string
}
export type postsType = {
    id: string
    message: string
    likeCount: string
}

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
let posts = [
    {id: "1", message: "Hi, my name Kirill", likeCount: "15"},
    {id: "2", message: "I am 24", likeCount: "20"},
    {id: "3", message: "I am work", likeCount: "5"}
]

ReactDOM.render(
    <App dialogs={dialogs} messages={messages} posts={posts}/>
    , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
