import React from "react";
import Statistics from "../Statistics/Statistics";
import StatisticsChart from "../Chart/Chart";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    getStatistics = (data) => {
        this.setState({
            data: data
        })
    };

    render() {
        const {data} = this.state;
        return (
            <div>
                <Statistics callback={this.getStatistics}/>
                <StatisticsChart data={(data !== null) ? data : null}/>
            </div>
        )
    }
}

export default Dashboard