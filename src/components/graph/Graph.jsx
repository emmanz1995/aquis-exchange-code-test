import React, { useState } from 'react';
import { graphData } from '../../Data';
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from 'react-chartjs-2';


export const options = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Amazon Stock sales from 2018 till date',
        },
    },
}

const Graph = () => {
    const [stockLevel, setStockLevel] = useState({
        labels: graphData.map((data) => data.year),
        datasets: [
            {
                label: "Stock Up",
                data: graphData.map((data) => data.stockUp),
            },
            {
                label: "Stock Down",
                data: graphData.map((data) => data.stockDown)
            }
        ]
    })
    return <Line data={stockLevel} options={options} />;
}

export default Graph;
