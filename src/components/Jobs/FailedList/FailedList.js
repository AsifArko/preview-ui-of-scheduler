import React from "react";
import JobList from "../JobList/JobList";
import {getFailedListApiPath, getRetryApiPath} from "../../../utils/routerUtils";
import {TopMenu} from "../../shared/TopMenu/TopMenu";
import PropTypes from "prop-types";
import {preparePaginatedApiUrl} from "../../../utils/preparePaginationUrl";
import {postData} from "../../../utils/ActionCreators";
import utils from "../../../utils/utils";
import {connect} from "react-redux";
import {contentType} from "../../../utils/ActionTypes";

class FailedList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: getFailedListApiPath
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

    retryJob = (id) => {
        const {onPostData} = this.props;
        let path = getRetryApiPath(id);
        onPostData(path, null, contentType.RETRY)
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.data !== this.props.data && this.props.data !== null) {
            window.location.reload();
        }
    }

    render() {
        const {path} = this.state;
        return (
            <div>
                <TopMenu/>
                <JobList
                    path={path}
                    callback={this.handlePageChange}
                    retry={true}
                    retryCallback={this.retryJob}
                />
            </div>
        )
    }
}

FailedList.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

const mapActionToProps = {
    onPostData: postData
};

const mapStateToProps = state => {
    const {jobRetryRemoteData} = state;
    return {
        data: utils.getData(jobRetryRemoteData),
        isFetching: utils.getIsFetching(jobRetryRemoteData)
    };
};

export default connect(mapStateToProps, mapActionToProps)(FailedList);