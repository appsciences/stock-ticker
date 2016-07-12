import React from 'react';

import MarketsTable from '../components/MarketsTable';
import NewSymbolControl from '../components/NewSymbolControl';

const App = () => (
  <div>
    <div>
      <NewSymbolControl />
    </div>
    <div>
      <MarketsTable />
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  return {
    children: ownProps.children
  };
};

export default App;