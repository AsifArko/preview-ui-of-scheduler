import React from "react";
import {connect} from "react-redux";

import {loadData} from "../../../utils/ActionCreators";
import utils from "../../../utils/utils";
import {contentType} from "../../../utils/ActionTypes";
import DetailsTable from "../../shared/DetailsTable/DetailsTable";

class JobDetails extends React.Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        const {onLoadData} = this.props;
        const path = `/job/${id}`;
        onLoadData(
            null,
            path,
            contentType.DETAILS
        )
    }

    render() {
        const {data} = this.props;
        return (
            <DetailsTable data={data}/>
        )
    }
}

const mapActionToProps = {
    onLoadData: loadData
};

const mapStateToProps = state => {
    const {jobRemoteData} = state;
    return {
        data: utils.getData(jobRemoteData),
        isFetching: utils.getIsFetching(jobRemoteData)
    };
};

export default connect(mapStateToProps, mapActionToProps)(JobDetails);