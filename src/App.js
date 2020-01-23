import React from 'react';
import {TopMenu} from '../src/components/shared/TopMenu/TopMenu';

import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <TopMenu/>
                <Dashboard/>
            </div>
        );
    }
}

export default App;
