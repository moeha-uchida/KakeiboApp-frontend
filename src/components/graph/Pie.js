import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, 
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import pieChartData from './PIE_DATA.js';  // default exportとしてインポート

import 'chartjs-plugin-datalabels';

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement,
);

export const PieGraph = () => {
    const options = {};

    console.log(pieChartData);

    return <Pie options={options} data={pieChartData} />;
};
