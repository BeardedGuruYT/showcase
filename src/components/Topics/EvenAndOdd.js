import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    updateInput(e) {
        this.setState({
            userInput: e.target.value 
        })
    }

    solve() {
        var numArr = this.state.userInput.split(/,\s*/).map((str)=> parseInt(str));
        var newEvens = [], newOdds = []; 
        numArr.forEach((num) => num % 2 === 0 ? newEvens.push(num) : newOdds.push(num));
        this.setState({
            evenArray: newEvens,
            oddArray: newOdds
        })
    }


    render() {
        console.log(this.state);
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input  className="inputLine"
                        onChange={ (e)=> this.updateInput(e) }/>
                <button className="confirmationButton"
                        onClick={ (e)=> this.solve() }>Split</button>
                <span className="resultsBox">Evens: [{ this.state.evenArray.join(", ") }]</span>
                <span className="resultsBox">Odds: [{ this.state.oddArray.join(", ") }]</span>
            </div>
        );
    }
}

export default EvenAndOdd;