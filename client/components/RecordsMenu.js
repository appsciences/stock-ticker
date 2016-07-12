import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const RecordsMenu = ({ records, selected, onSelect }) => (
  <DropdownButton title={selected.symbol}>
    {
      records.map(r => <MenuItem onSelect={() => onSelect(r)}>{r.symbol}</MenuItem>)
    }
  </DropdownButton>
);

export default RecordsMenu;