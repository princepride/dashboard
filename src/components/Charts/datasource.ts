let stockData = [{
    x: new Date(2022, 0, 1),
    "open": 320.705719,
    "high": 324.074066,
    "low": 317.737732,
    close: 323.783783,
    "volume": 45638000
}, {
    x: new Date(2022, 0, 2),
    "open": 323.028015,
    "high": 324.299286,
    "low": 319.639648,
    close: 321.631622,
    "volume": 40857000
}, {
    x: new Date(2022, 0, 3),
    "open": 319.544556,
    "high": 319.819824,
    "low": 315.865875,
    close: 317.892883,
    "volume": 32519000
}, {
    x: new Date(2022, 0, 4),
    "open": 316.436432,
    "high": 318.533539,
    "low": 314.599609,
    close: 316.476471,
    "volume": 46327000
}, {
    x: new Date(2022, 0, 5),
    "open": 320.705719,
    "high": 324.074066,
    "low": 317.737732,
    close: 323.783783,
    "volume": 45638000
}, {
    x: new Date(2022, 0, 6),
    "open": 323.028015,
    "high": 324.299286,
    "low": 319.639648,
    close: 321.631622,
    "volume": 40857000
}, {
    x: new Date(2022, 0, 7),
    "open": 319.544556,
    "high": 319.819824,
    "low": 315.865875,
    close: 317.892883,
    "volume": 32519000
}, {
    x: new Date(2022, 0, 8),
    "open": 316.436432,
    "high": 318.533539,
    "low": 314.599609,
    close: 316.476471,
    "volume": 46327000
}, {
    x: new Date(2022, 0, 9),
    "open": 320.705719,
    "high": 324.074066,
    "low": 317.737732,
    close: 323.783783,
    "volume": 45638000
}, {
    x: new Date(2022, 0, 10),
    "open": 323.028015,
    "high": 324.299286,
    "low": 319.639648,
    close: 321.631622,
    "volume": 40857000
}, {
    x: new Date(2022, 0, 11),
    "open": 319.544556,
    "high": 319.819824,
    "low": 315.865875,
    close: 317.892883,
    "volume": 32519000
}, {
    x: new Date(2022, 0, 12),
    "open": 316.436432,
    "high": 318.533539,
    "low": 314.599609,
    close: 316.476471,
    "volume": 46327000
}];

export const chartData = [
    {
        dataSource: stockData,
        xName: "x",
        yName: "close",
        width: '2',
        marker: { visible: true, width: 10, height: 10 },
        type: 'Line'
    },
]