import React from "react";
import JobListTable from "../JobList/JobList";
import {getWaitingListApiPath} from "../../../utils/routerUtils";
import {TopMenu} from "../../shared/TopMenu/TopMenu";

export default class WaitingList extends React.Component {
    render() {
        return (
            <div>
                <TopMenu/>
                <JobListTable path={getWaitingListApiPath}/>
            </div>
        )
    }
}