import React, { Component } from 'react';

class Sum extends Component {
    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    // numKey is string
    updateNum(e, numKey) {
        var updateState = {};
        updateState[numKey] = e.target.value;
        this.setState(updateState);
    }

    add() {
        this.setState({
            sum: parseInt(this.state.number1) + parseInt(this.state.number2)
        })
    }

    render(){
        console.log(this.state)
        console.log(this.state)
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine"
                        onChange={ (e) => this.updateNum(e, "number1") }
                        placeholder="Enter number"></input>
                <input className="inputLine"
                        onChange={ (e) => this.updateNum(e, "number2") }
                        placeholder="Enter another number"></input>
                <button className="confirmationButton"
                        onClick={ (e) => this.add() }>Add</button>
                <span className="resultsBox sumRB">Sum: { this.state.sum }</span>
            </div>
        );
    }
}

export default Sum;
