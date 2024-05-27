// src/components/Line.js
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import lineChartData from './DATA.js';  // default exportとしてインポート

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

export const LineGraph = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "This is A Graph Representing My Daily Steps",
            },
        },
    };

    console.log(lineChartData);

    return <Line options={options} data={lineChartData} />;
};
