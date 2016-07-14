import React from 'react';
import ReactDOM from 'react-dom';
import {
  FormGroup,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';


const NewRecordControl = ({ onCreate }) => {
  let input;

  const clickHandler = () => {
    const node = ReactDOM.findDOMNode(input);
    onCreate(node.value);
    node.value = '';
  };

  return (
    <FormGroup>
      <InputGroup>
        <FormControl type="text" ref={n => input = n} />
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