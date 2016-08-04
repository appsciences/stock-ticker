import React from 'react';
import {getData} from '../actions/yahoo.finance';

import {NumbersTable} from '../components/quotes-table';

const Spinner = require('react-spinkit');

import {Well, Alert,Form,FormControl,FormGroup,ControlLabel,Button} from 'react-bootstrap';
import {displayIf, visibleIf} from '../components/show-if';


const App = React.createClass({
    getInitialState(){
        return {
            loading:false,
            data:[],
            tickers: [],
            ticker:'',
            error:null,
            noOfDays: 5,
            days: 5
        };

    },

    addTicker(){
        //set state is not immediate.

        if(this.state.tickers.indexOf(this.state.ticker) > -1) return;

        const tickers = this.state.tickers.concat(this.state.ticker);
        this.setState({tickers});

        this.refreshData(tickers, parseInt(this.state.days));

    },

    updateDays(){
        this.setState({days:this.state.noOfDays});

        this.refreshData(this.state.tickers, parseInt(this.state.noOfDays));
    },


    refreshData(tickers, days){

        this.setState({loading: true});

        getData(tickers, days)
            .then(data => {
                this.setState({
                    data: data.query.results.quote,
                    loading:false})
            });
        //.catch(error => this.setState({error, loading:false}));}

    },

    render() {
        return (
            <Well>
                <Spinner spinnerName='three-bounce' noFadeIn style={displayIf(this.state.loading)}/>
                <Alert bsStyle="warning" style={visibleIf(this.state.error)}>
                    <strong>Error: </strong> {`Error message for support: ${this.state.error && this.state.error.message}`}
                </Alert>
                <Form inline>
                    <FormGroup controlId="noOfDays">
                        <ControlLabel>Add Ticker</ControlLabel>
                        {' '}
                        <FormControl
                            type="text"
                            value={this.state.ticker}
                            onChange={e => this.setState({ticker: e.target.value})}/>
                        <Button
                            onClick={this.addTicker}>Add</Button>&nbsp;
                        <ControlLabel>No of Days</ControlLabel>
                        {' '}
                        <FormControl
                            type="text"
                            value={this.state.noOfDays}
                            onChange={e => this.setState({noOfDays:e.target.value})}/>
                        <Button
                            onClick={this.updateDays}

                            >Save</Button>
                    </FormGroup>
                </Form>
                <br/>
                <NumbersTable data={this.state.data} days={this.state.days}/>
            </Well>
        )
    }
});

export default App;