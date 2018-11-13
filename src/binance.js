//https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=15m&limit=100
function toISODate(milliseconds) {
    var date = new Date(milliseconds);
    var y = date.getFullYear()
    var m = date.getMonth() + 1;
    var d = date.getDate();
    m = (m < 10) ? '0' + m : m;
    d = (d < 10) ? '0' + d : d;
    return [y, m, d].join('-');
}

function parseData(parse) {
	return function(d) {
		d.date = new Date(d[0]);
		d.open = +d[1];
		d.high = +d[2];
		d.low = +d[3];
		d.close = +d[4];
		d.volume = +d[5];

		return d;
	};
}

export function getData(symbol, interval, limit) {
	const promiseCrypto = fetch(`https://cors-anywhere.herokuapp.com/https://api.binance.com/api/v1/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`)
		.then(response => response.json())
		.then(data => {
            const candles = data.map(candle => parseData(toISODate)(candle))
            console.log(candles)
            return candles
        })
	return promiseCrypto;
}