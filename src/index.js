import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";

import './index.css';
import App from './App';
import FailedList from "./components/Jobs/FailedList/FailedList";
import WaitingList from "./components/Jobs/WaitingList/WaitingList";
import DelayedList from "./components/Jobs/DelayedList/DelayedList";
import CompletedList from "./components/Jobs/CompletedList/CompletedList";
import ActiveList from "./components/Jobs/ActiveList/ActiveList";

const store = configureStore({reducer: rootReducer});

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Provider store={store}>
                <Route path='/' exact component={App}/>
                <Route path='/completed' exact component={CompletedList}/>
                <Route path='/active' exact component={ActiveList}/>
                <Route path='/waiting' exact component={WaitingList}/>
                <Route path='/delayed' exact component={DelayedList}/>
                <Route path='/failed' exact component={FailedList}/>
            </Provider>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
