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
        palindrome: this.state.palindrome.str.split('').reverse().join('') === str
    })
}


    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>plindrome</h4>
                <input className="inputLine"
                    onChange={(e) => this.updateUserInput(e)}></input>
                <button className="confirmationButton"
                    onClick={(e) => this.solve()} ></button>
                <span className="resultsBox:">{ JSON.stringify(this.state.palindrome) }</span>
            </div>
        );
    }
}

export default Palindrome;