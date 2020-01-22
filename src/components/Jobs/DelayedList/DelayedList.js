import React from "react";
import JobListTable from "../JobList/JobList";
import {getDelayedListApiPath} from "../../../utils/routerUtils";
import {TopMenu} from "../../shared/TopMenu/TopMenu";

export default class DelayedList extends React.Component {
    render() {
        return (
            <div>
                <TopMenu/>
                <JobListTable path={getDelayedListApiPath}/>
            </div>
        )
    }
}