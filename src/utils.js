export function getParams(url) {
	var urlParams = new URLSearchParams(url);
	return [urlParams.get('symbol') ? urlParams.get('symbol') : 'BTCUSDT', urlParams.get('interval') ? urlParams.get('interval') : '1d', urlParams.get('limit') ? urlParams.get('limit') : 500]
}