export default function prepareChartData(data) {
    let keys = Object.keys(data);
    let timeStr = new Date(data.time).toLocaleTimeString();
    let chartParameters = keys.map(key => {
        return {
            id: timeStr,
            completed: data.completed,
            active: data.active,
            waiting: data.waiting,
            failed: data.failed,
            delayed: data.delayed
        }
    });
    return chartParameters;
}