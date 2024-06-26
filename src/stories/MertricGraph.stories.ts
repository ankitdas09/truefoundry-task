import LineGraph from "../pages/metrics/components/linegraph";
import "../styles/output.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);
ChartJS.defaults.responsive = true;

export default {
    title: "Metric Graph",
    component: LineGraph,
};

export const Graph = {
    args: {
        data: {
            labels: [
                "14:27",
                "14:27",
                "14:27",
                "14:27",
                "14:27",
                "14:27",
                "14:27",
                "14:27",
                "14:28",
                "14:28",
                "14:28",
                "14:28",
                "14:28",
                "14:28",
                "14:28",
                "14:28",
                "14:28",
                "14:28",
                "14:28",
                "14:28",
                "14:29",
                "14:29",
                "14:29",
                "14:29",
                "14:29",
                "14:29",
                "14:29",
                "14:29",
                "14:29",
                "14:29",
                "14:29",
                "14:29",
                "14:30",
                "14:30",
                "14:30",
                "14:30",
                "14:30",
                "14:30",
                "14:30",
                "14:30",
                "14:30",
                "14:30",
                "14:30",
                "14:30",
                "14:31",
                "14:31",
                "14:31",
                "14:31",
                "14:31",
                "14:31",
                "14:31",
                "14:31",
                "14:31",
                "14:31",
                "14:31",
                "14:31",
                "14:32",
                "14:32",
                "14:32",
                "14:32",
                "14:32",
            ],
            datasets: [
                {
                    label: "Limits",
                    data: [
                        96.86, 97.46000000000001, 94.08, 99.9, 92.31, 82.75, 90.14, 92.32, 89.48,
                        90.28999999999999, 91.41, 96.98, 93.2, 82.95, 91.36, 94.03999999999999,
                        88.92, 95.99, 80.88, 95.87, 85.32, 84.79, 85.01, 84.83, 82.51, 85.31, 94.75,
                        91, 89.58, 80.85, 96.3, 97.94, 91.53, 83.3, 97.31, 91.96000000000001, 85.34,
                        95.89, 86.5, 93.46000000000001, 91.33, 98.21000000000001, 99.88, 97.77,
                        87.96, 89.33, 93.12, 82.21, 85.95, 99.16, 84.16, 84.42, 93.92, 92.22, 84.52,
                        96.97, 83.01, 87.55, 86.53, 93.44, 83.91,
                    ],
                    borderColor: "rgba(5, 150, 105, 1)",
                    backgroundColor: "rgba(5, 150, 105, 1)",
                    pointRadius: 0,
                    fill: false,
                    order: 3,
                    borderWidth: 2,
                },
                {
                    label: "Requested",
                    data: [
                        82.68, 55.269999999999996, 67.99, 48.42, 50.12, 76.38, 43.61, 52.31,
                        79.72999999999999, 55.41, 70.27, 70.93, 47.58, 47.67, 84.06, 45.95, 80.4,
                        74.44, 55.8, 44.24, 59.45, 51.92, 47.16, 75.28, 84, 68.12, 48.63, 75.82,
                        64.11, 67.76, 60.519999999999996, 49.06, 74.02000000000001, 45.92, 42.12,
                        56.370000000000005, 69.85, 73.24000000000001, 58.53, 57.53,
                        73.96000000000001, 44.19, 47.81, 58.510000000000005, 42.13, 43.24, 41.4,
                        60.94, 45.96, 55.88, 75.61, 44.56, 84.75999999999999, 76.12, 50.42, 50.31,
                        76.94, 50.83, 77.82, 67.02, 54.33,
                    ],
                    borderColor: "rgba(37, 99, 235, 1)",
                    backgroundColor: "rgba(37, 99, 235, 1)",
                    pointRadius: 0,
                    fill: false,
                    order: 2,
                    borderWidth: 2,
                },
                {
                    label: "Used",
                    data: [
                        53.47, 30.66, 36.39, 41.44, 35.980000000000004, 44.82, 49.96, 54.9, 10.32,
                        40.79, 24.619999999999997, 25.47, 25.39, 29.26, 34.69, 51.25, 31.02,
                        24.880000000000003, 24.45, 51.22, 59.89, 33.21, 44.79, 14.809999999999999,
                        24.310000000000002, 21.96, 17.06, 52.68, 53.36, 42.82, 24.57, 30.14, 28.77,
                        30.6, 17.18, 13.43, 57.39, 53.42, 12.99, 37.64, 19.39, 51.87,
                        17.990000000000002, 18.17, 42.8, 20.08, 20.1, 27.81, 16.3, 15.85,
                        36.980000000000004, 28.18, 45.05, 51.67, 46.08, 42.72, 38.16,
                        12.379999999999999, 50.66, 13.53, 43.17,
                    ],
                    borderColor: "rgba(220, 38, 38, 1)",
                    backgroundColor: "rgba(220, 38, 38, 1)",
                    pointRadius: 0,
                    fill: false,
                    order: 1,
                    borderWidth: 2,
                },
            ],
        },
        title: "Graph Title Here",
    },
};
