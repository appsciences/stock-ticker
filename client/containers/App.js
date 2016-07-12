import React from 'react';

import MarketsTable from '../components/MarketsTable';
import NewRecordControl from '../components/NewRecordControl';
import RecordsMenu from '../components/RecordsMenu';

import { fetchRecords, saveNewRecord } from '../actions';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRecord: {},
      records: []
    };

    this.newRecordCreate = this.newRecordCreate.bind(this);
    this.selectRecord = this.selectRecord.bind(this);
  }

  componentDidMount() {
    fetchRecords().then(records => {
      this.setState({ records });

      if (records.length) {
        this.selectRecord(records[0]);
      }
    });
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
      <div>
        <br />
        <div className="col-md-2">
          <RecordsMenu
            selected={this.state.selectedRecord}
            onSelect={this.selectRecord}
            records={this.state.records}
          />
        </div>
        <div className="col-md-3">
          <NewRecordControl onCreate={this.newRecordCreate} />
        </div>
        <div>
          <MarketsTable />
        </div>
      </div>
    )
  }
}

export default App;