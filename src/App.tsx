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
import {StateType} from "./redux/store";
import {ActionType} from "./redux/profile-reducer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

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
                    <Route path='/dialogs' element={<DialogsContainer/>}/>
                    <Route path='/profile/*'
                           element={<Profile state={props.state} dispatch={props.dispatch}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>


    );
}

export default App;
