import React from "react";
import JobList from "../JobList/JobList";
import {getDelayedListApiPath} from "../../../utils/routerUtils";
import {TopMenu} from "../../shared/TopMenu/TopMenu";
import PropTypes from "prop-types";
import {preparePaginatedApiUrl} from "../../../utils/preparePaginationUrl";

export default class DelayedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: getDelayedListApiPath
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

DelayedList.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};