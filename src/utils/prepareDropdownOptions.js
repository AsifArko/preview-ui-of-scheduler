export function prepareIntervalOptions() {
    return [
        {
            key: 'one_day',
            text: 'one day',
            value: '1',
        },
        {
            key: 'seven_days',
            text: '7 days',
            value: '7',
        },
        {
            key: 'thirty_days',
            text: '30 days',
            value: '30',
        }
    ];
};

export function prepareDurationOptions(interval) {
    let duration;
    switch (interval) {
        case "1":
            duration = [
                {
                    key: 'one_hour',
                    text: 'one hour',
                    value: '1',
                },
                {
                    key: 'six_hours',
                    text: '6 hour',
                    value: '6',
                }
            ];
            break;
        case "7":
            duration = [
                {
                    key: '1_hour',
                    text: 'one hour',
                    value: '1',
                },
                {
                    key: '6_hours',
                    text: '6 hour',
                    value: '6',
                },
                {
                    key: '24_hours',
                    text: '24 hour',
                    value: '24',
                }
            ];
            break;
        case "30":
            duration = [
                {
                    key: '1_hour',
                    text: 'one hour',
                    value: '1',
                },
                {
                    key: '6_hours',
                    text: '6 hour',
                    value: '6',
                },
                {
                    key: '24_hours',
                    text: '24 hour',
                    value: '24',
                }
            ];
            break;
        default:
            break;
    }
    return duration;
};