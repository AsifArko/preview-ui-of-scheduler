import React from "react";
import {Dropdown, Segment} from "semantic-ui-react";

import Statistics from "../Statistics/Statistics";
import StatisticsChart from "../Chart/Chart";
import {prepareDurationOptions, prepareIntervalOptions} from "../../utils/prepareDropdownOptions";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            interval: 0,
            duration: null
        }
    }

    getStatistics = (data) => {
        this.setState({
            data: data
        })
    };

    handleIntervalChange = (event, {value}) => {
        this.setState({
            interval: value
        })
    };

    handleDurationChange = (event, {value}) => {
        this.setState({
            duration: value
        })
    };

    render() {
        const {data, interval} = this.state;
        let intervals = prepareIntervalOptions();
        let durations = prepareDurationOptions(interval);
        return (
            <div>
                <div className={"statistics-wrapper"}>
                    <Statistics callback={this.getStatistics}/>
                </div>
                <div className={"filter-segment"}
                     style={{paddingTop: '10px', paddingBottom: '10px', paddingLeft: "270px", paddingRight: "320px"}}>
                    <Segment basic={true}>
                        <div style={{display: 'flex'}}>
                            <div style={{width: '300px'}}>
                                <Dropdown
                                    compact={true}
                                    placeholder='Select Interval'
                                    fluid
                                    selection
                                    options={intervals}
                                    onChange={this.handleIntervalChange}
                                />
                            </div>
                            <div style={{width: '300px', paddingLeft: '10px', float: 'right'}}>
                                <Dropdown
                                    compact={true}
                                    placeholder='Select Duration'
                                    fluid
                                    selection
                                    options={(interval === 0) ? [] : durations}
                                    disabled={(interval === 0) ? true : false}
                                    onChange={this.handleDurationChange}
                                />
                            </div>
                        </div>
                    </Segment>
                </div>
                <div className={"chart-wrapper"}>
                    <StatisticsChart data={(data !== null) ? data : null}/>
                </div>
            </div>
        )
    }
}

export default Dashboard