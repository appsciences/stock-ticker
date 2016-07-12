import React from 'react';

const NewSymbolControl = ({ text, onClick }) => (
  <h4 onClick={onClick}>{text}</h4>
);

export default NewSymbolControl;