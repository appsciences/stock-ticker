import React from 'react';
import ReactDOM from 'react-dom';
import {
  FormGroup,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';


const NewRecordControl = ({ value, onCreate }) => {
  let input;

  return (
    <FormGroup>
      <InputGroup>
        <FormControl type="text" value={value} />
        <InputGroup.Button>
          <Button onClick={clickHandler}>
            Add Ticker
          </Button>
        </InputGroup.Button>
      </InputGroup>
    </FormGroup>
  );
};

export default NewRecordControl;