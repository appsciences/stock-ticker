import React from 'react';
import ReactDOM from 'react-dom';
import {
  FormGroup,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';


const NoDays = ({ onChange }) => {
  return (
    <FormGroup>
      <InputGroup>
        <FormControl type="text" onChange=={onChange} defualText="Enter no of days"/>
      </InputGroup>
    </FormGroup>
  );
};

export default NewRecordControl;