import React from "react";
import JobListTable from "../JobList/JobList";
import {getActiveListApiPath} from "../../../utils/routerUtils";
import {TopMenu} from "../../shared/TopMenu/TopMenu";

export default class ActiveList extends React.Component {
    render() {
        return (
            <div>
                <TopMenu/>
                <JobListTable path={getActiveListApiPath}/>
            </div>
        )
    }
}