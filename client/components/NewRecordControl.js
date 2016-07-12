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

	return (
		<FormGroup>
			<InputGroup>
				<FormControl type="text" ref={n => input = n} />
				<InputGroup.Button>
					<Button onClick={() => onCreate(ReactDOM.findDOMNode(input).value)}>
						Add
					</Button>
				</InputGroup.Button>
			</InputGroup>
		</FormGroup>
	);
};

export default NewRecordControl;