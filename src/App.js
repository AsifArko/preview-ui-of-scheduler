import React from 'react';
import {TopMenu} from '../src/components/shared/TopMenu/TopMenu';

import './App.css';
import {Statistics} from "./components/Statistics/Statistics";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <TopMenu/>
                <Statistics/>
            </div>
        );
    }
}

export default App;
