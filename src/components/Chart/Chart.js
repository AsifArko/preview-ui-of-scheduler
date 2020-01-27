import React from 'react';
import {Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from 'recharts';
import {Segment} from "semantic-ui-react";
import 'chart.js';
import prepareChartData from "../../utils/prepareChartData";

class StatisticsChart extends React.Component {
    render() {
        const {data} = this.props;
        let chartParams;

        if (data !== null) {
            chartParams = prepareChartData(data)
        }

        let keys = [
            {id: 0, key: "completed", color: '#65FF19'},
            {id: 1, key: "active", color: '#fffd2c'},
            {id: 2, key: "waiting", color: "#1c0eff"},
            {id: 3, key: "failed", color: '#ca2019'},
            {id: 4, key: "delayed", color: '#2db8bc'}
        ];

        let areas = keys.map(element =>
            <Area
                key={element.id}
                type="monotone"
                stackId="1"
                dataKey={element.key}
                stroke={element.color}
                fill={element.color}
                fillOpacity={0.5}
            />
        );
        return (
            <div className="chart-inline"
                 style={{
                     display: 'flex',
                     paddingLeft: '285px',
                     paddingRight: '1px',
                     paddingTop: '20px',
                     paddingBottom: '20px'
                 }}>
                <Segment>
                    <AreaChart width={1500} height={600} data={chartParams}
                               margin={{top: 30, right: 30, left: 0, bottom: 10}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="id"/>
                        <YAxis/>
                        <Tooltip/>
                        {areas}
                        <Legend/>
                    </AreaChart>
                </Segment>
            </div>
        );
    }
}

export default StatisticsChart;