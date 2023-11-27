import GaugeChart from 'react-gauge-chart'

// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     ArcElement,
//   } from 'chart.js';
// import { Doughnut } from 'react-chartjs-2';

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     ArcElement,
//     Title,
//     Tooltip,
//     Legend
// );

// export  const options = {
//     responsive: true,
//     plugins: {
//         legend: {
//         position: 'top' 
//         },
//         title: {
//         display: true,
//         text: 'Power Consumption Line Chart',
//         },
//     },
// };

// const labels = [];

// export const data = {
//     labels,
//     datasets: [
//         {
//         label: 'Dataset 1',
//         data: [1,2,3,4,5,6,7,8,9,0,1,2],
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         circumference: 180,
//         rotation: 270
//         },
//     ],
// };

export function gauge() {
    return <GaugeChart id="gauge-chart2" 
            nrOfLevels={20} 
            percent={0.86} 
        />
}