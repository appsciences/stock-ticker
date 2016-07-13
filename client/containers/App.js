import React from 'react';

import NumbersTable from '../components/NumbersTable';
import NewRecordControl from '../components/NewRecordControl';
import RecordsMenu from '../components/RecordsMenu';

import { fetchRecords, saveNewRecord, subscribeOnUpdates } from '../actions';

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
    const handler = records => {
      this.setState({ records });

      if (records.length) {
        this.selectRecord(records[0]);
      }
    };
    
    fetchRecords().then(handler);
    subscribeOnUpdates(handler);
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
          {
            this.state.selectedRecord.numbers &&
            <NumbersTable record={this.state.selectedRecord} />
          }
        </div>
      </div>
    )
  }
}

export default App;