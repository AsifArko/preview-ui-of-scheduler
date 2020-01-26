import React from "react";
import PropTypes from "prop-types";

import JobList from "../JobList/JobList";
import {TopMenu} from "../../shared/TopMenu/TopMenu";
import {getActiveListApiPath} from "../../../utils/routerUtils";
import {preparePaginatedApiUrl} from "../../../utils/preparePaginationUrl";

export default class ActiveList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            path: getActiveListApiPath
        }
    }

    handlePageChange = (page) => {
        let url = this.props.history.location.pathname;
        this.props.history.push(url + `?page=${page}`);

        let paginatedApiPath = preparePaginatedApiUrl(url, page);
        this.setState({
            path: paginatedApiPath
        })
    };

    render() {
        let {path} = this.state;
        return (
            <div>
                <TopMenu/>
                <JobList
                    path={path}
                    callback={this.handlePageChange}
                />
            </div>
        )
    }
}

ActiveList.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};