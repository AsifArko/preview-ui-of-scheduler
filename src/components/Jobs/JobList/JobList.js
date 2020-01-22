import React from "react";
import {loadData} from "../../../utils/ActionCreators";
import utils from "../../../utils/utils";
import {connect} from "react-redux";
import {contentType} from "../../../utils/ActionTypes";
import ListTable from "../../shared/ListTable/ListTable";

class JobListTable extends React.Component {
    componentDidMount() {
        const {onLoadData, path} = this.props;
        onLoadData(
            null,
            path,
            contentType.LIST
        )
    }

    render() {
        const {data} = this.props;
        return (
            <ListTable data={(data !== null || data !== undefined) ? data : null}/>
        )
    }
}

const mapActionToProps = {
    onLoadData: loadData
};

const mapStateToProps = state => {
    const {completeJobListRemoteData} = state;
    return {
        data: utils.getData(completeJobListRemoteData),
        isFetching: utils.getIsFetching(completeJobListRemoteData)
    };
};

export default connect(mapStateToProps, mapActionToProps)(JobListTable);