import React from "react";
import JobListTable from "../JobList/JobList";
import {getFailedListApiPath} from "../../../utils/routerUtils";
import {TopMenu} from "../../shared/TopMenu/TopMenu";

export default class FailedList extends React.Component {
    render() {
        return (
            <div>
                <TopMenu/>
                <JobListTable path={getFailedListApiPath}/>
            </div>
        )
    }
}