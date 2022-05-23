import React from "react";
import {LineChart, Line, XAxis, YAxis, Legend, Area} from 'recharts';
import Tooltip from "@material-ui/core/Tooltip";


const DashboardLineChart = () => {

    const data = [
        {name: 'Page A', uv: 400, pv: 2400, amt: 100 , av: 5800, bv: 5000 , cv: 100},
        {name: 'Page b', uv: 500, pv: 400, amt: 2200 , av: 1500, bv: 100 , cv: 1000},
        {name: 'Page c', uv: 600, pv: 3400, amt: 1300 , av: 100, bv: 4700 , cv: 5400},
        {name: 'Page d', uv: 200, pv: 4400, amt: 400 , av: 1300, bv: 600 , cv: 3600},
        {name: 'Page e', uv: 700, pv: 1400, amt: 1500 , av: 500, bv: 500 , cv: 200},
        {name: 'Page f', uv: 900, pv: 300, amt: 600 , av: 300, bv: 200 , cv: 600}
    ];

    return (
        <div>
            <LineChart width={1000} height={370} data={data} className="chart-lh">
                <Line dataKey="uv" stroke="#00D037"/>
                <Line dataKey="pv" stroke="#FCB900"/>
                <Line dataKey="amt" stroke="#007FFF"/>
                <Line dataKey="av" stroke="#7000FF"/>
                <Line dataKey="bv" stroke="#C32525"/>
                <Line dataKey="cv" stroke="#002060"/>
                <Legend verticalAlign='top'/>
                <Area dataKey="uv" stackId="1" />
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip />
            </LineChart>
        </div>
    )
}
export default DashboardLineChart;