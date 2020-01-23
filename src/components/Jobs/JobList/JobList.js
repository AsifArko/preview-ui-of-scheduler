import React from "react";
import {loadData} from "../../../utils/ActionCreators";
import utils from "../../../utils/utils";
import {connect} from "react-redux";
import {contentType} from "../../../utils/ActionTypes";
import ListTable from "../../shared/ListTable/ListTable";
import {Dimmer, Loader, Segment} from "semantic-ui-react";

class JobListTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        const {onLoadData, path} = this.props;
        onLoadData(
            null,
            path,
            contentType.LIST
        )
    }

    render() {
        const {data, isFetching} = this.props;
        return (
            <div style={{paddingLeft: '45px', paddingRight: '45px', paddingTop: '1px'}}>
                <Segment basic={true}>
                    <Dimmer active={isFetching} inverted>
                        <Loader size="small"/>
                    </Dimmer>
                    <ListTable data={(data !== null || data !== undefined) ? data : null}/>
                </Segment>
            </div>
        )
    }
}

const mapActionToProps = {
    onLoadData: loadData
};

const mapStateToProps = state => {
    const {jobListRemoteData} = state;
    return {
        data: utils.getData(jobListRemoteData),
        isFetching: utils.getIsFetching(jobListRemoteData)
    };
};

export default connect(mapStateToProps, mapActionToProps)(JobListTable);