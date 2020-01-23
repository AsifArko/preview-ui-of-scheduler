import React from "react";
import JobListTable from "../JobList/JobList";
import {getCompletedListApiPath} from "../../../utils/routerUtils";
import {TopMenu} from "../../shared/TopMenu/TopMenu";

export default class CompletedList extends React.Component {
    render() {
        return (
            <div>
                <TopMenu/>
                <JobListTable path={getCompletedListApiPath}/>
            </div>
        )
    }
}