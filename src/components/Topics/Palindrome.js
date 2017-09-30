import React, { Component } from 'react';

class Palindrome extends Component {

    constructor() {
        super();
        this.state = {
            userInput: "",
            palindrome: ""
        }
    }
    updateUserInput(e) {
       this.setState({ userInput: e.target.value })
    }
solve(){
    this.setState({
        palindrome: this.state.userInput.split('').reverse().join('') === this.state.userInput
    })
}


    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine"
                    onChange={(e) => this.updateUserInput(e)}
                    placeholder="Type in a word"></input>
                <button className="confirmationButton"
                    onClick={(e) => this.solve()} >Check</button>
                <span className="resultsBox palindromeRB">Palindrome: { this.state.palindrome.toString() }</span>
            </div>
        );
    }
}

export default Palindrome;