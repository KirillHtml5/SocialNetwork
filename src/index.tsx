import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {State} from "./redux/State";

import {Rerender} from "./rerender";

Rerender(State);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
