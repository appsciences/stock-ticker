import React from 'react';

import {NumbersTable} from '../components/numbers-table';

const Spinner = require('react-spinkit');

import {Well, Alert} from 'react-bootstrap';
import {displayIf, visibleIf} from '../components/show-if';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRecord: {},
      data: [],
      noOfDays: 5
    };

    this.newRecordCreate = this.newRecordCreate.bind(this);
    this.selectRecord = this.selectRecord.bind(this);
    this.addTicker = this.addTicker.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  addTicker(event){
    this.setState({tickers: [...this.state.tickers,event.target.value]})
  }

  changeNoOfDays(val){ this.setState ({noofDays: val})}

  componentDidMount() {

    this.setState({loading:true});

    const symbolsString = '"GOOG", "YHOO"';

    const query = `select * from yahoo.finance.historicaldata where symbol = "YHOO" and startDate = "2016-07-21" and endDate = "2016-07-27"`;

    var url = new URL('https://query.yahooapis.com/v1/public/yql');

    url.searchParams.append('q', query);

    url.searchParams.append('format', 'json');

    url.searchParams.append('env', 'store://datatables.org/alltableswithkeys');

    fetch(url)
        .then(response => {

          return response.json();

        })
        .then((data) => {
          this.setState({data: data.query.results.quote, loading: false})
        })
        .catch(error => this.setState({error, loading:false}));

  }

  newRecordCreate(symbol) {
    saveNewRecord(symbol).then(record => {
      this.setState({
        records: [...this.state.records, record]
      });
    });
  }

  selectRecord(selectedRecord) {
    this.setState({ selectedRecord });
  }

  render() {
    return (
        <Well>
          <Spinner spinnerName='three-bounce' noFadeIn style={displayIf(this.state.loading)}/>
          <Alert bsStyle="warning" style={visibleIf(this.state.error)}>
            <strong>Error: </strong> {`Error message for support: ${this.state.error && this.state.error.message}`}
          </Alert>

          <NumbersTable data={this.state.data}/>
</Well>
    )
  }
}

export default App;