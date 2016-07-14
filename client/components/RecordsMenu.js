import React from 'react';
import { DropdownButton, MenuItem, Glyphicon} from 'react-bootstrap';

const RecordsMenu = ({ records, selected, onSelect }) => (
  <DropdownButton title={selected.symbol || 'Select ticker'}>
    {
      records.length ?
          records.map(r =>
              <MenuItem
                  onSelect={() => onSelect(r)}>
                {r.symbol}&nbsp;&nbsp;&nbsp;<Glyphicon glyph="minus-sign" />
              </MenuItem>) :
          <MenuItem> No tickers entered</MenuItem>
    }
  </DropdownButton>
);

export default RecordsMenu;