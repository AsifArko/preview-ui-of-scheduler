import React from "react";
import PropTypes from "prop-types";

import JobList from "../JobList/JobList";
import {TopMenu} from "../../shared/TopMenu/TopMenu";
import {getCompletedListApiPath} from "../../../utils/routerUtils";
import {preparePaginatedApiUrl} from "../../../utils/preparePaginationUrl";

export default class CompletedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: getCompletedListApiPath
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

CompletedList.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};