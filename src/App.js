import React from 'react';
import {TopMenu} from '../src/components/shared/TopMenu/TopMenu';

import './App.css';
import QueueStatistics from "./components/Statistics/Statistics";
import JobListTable from "./components/Jobs/JobList/JobList";
import {getCompletedListApiPath} from "./utils/routerUtils";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <TopMenu/>
                <QueueStatistics/>
                <JobListTable path={getCompletedListApiPath}/>
            </div>
        );
    }
}

export default App;
