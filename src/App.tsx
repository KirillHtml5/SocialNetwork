import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionType, StateType} from "./redux/State";

export type AppPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

function App(props: AppPropsType) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs dialogs={props.state.dialogsPage.dialogs}
                                                             messages={props.state.dialogsPage.messages}
                                                             dispatch={props.dispatch}
                                                             newTextMessage={props.state.dialogsPage.newTextMessage}
                    />}/>
                    <Route path='/profile/*'
                           element={<Profile posts={props.state.profilePage.posts}
                                             dispatch={props.dispatch}
                                             newTextPost={props.state.profilePage.newTextPost}
                           />}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>


    );
}

export default App;
