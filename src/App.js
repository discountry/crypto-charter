import React, { Component } from 'react';
import Chart from './Chart';
import { getData } from './binance';
import { getParams } from './utils';

import { TypeChooser } from "react-stockcharts/lib/helper";

class App extends Component {
  componentDidMount() {
    let symbol = 'BTCUSDT'
    let interval = '1d'
    let limit = 500
    if (getParams(window.location.search)) {
      [symbol, interval, limit] = getParams(window.location.search)
    }
		getData(symbol, interval, limit).then(data => {
            this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<TypeChooser>
				{type => <Chart type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}

export default App;
