export default function prepareChartData(data) {
    let keys = Object.keys(data);
    let chartParameters = keys.map(key => {
        return {
            id: new Date().toLocaleTimeString().toString(),
            completed: data.completed,
            active: data.active,
            waiting: data.waiting,
            failed: data.failed,
            delayed: data.delayed
        }
    });
    return chartParameters;
}