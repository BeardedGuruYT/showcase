import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray: ["London", "Provo", "Christ Church", "Miami", "PSL", "Clearwater", "NYC", "Cincinnati"],
            userInput: "",
            filteredArray: []
        }
    }

    updateUserInput(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    solve() {
        this.setState({
            filteredArray: this.state.unFilteredArray.filter((str) => str.includes(this.state.userInput))
        })
    }

    render(){
        console.log(this.state)
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Cities: { JSON.stringify(this.state.unFilteredArray) }</span>
                <input className="inputLine"
                        onChange={ (e)=> this.updateUserInput(e) }></input>
                <button className="confirmationButton"
                        onClick={ (e)=> this.solve() }>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Cities: { JSON.stringify(this.state.filteredArray) }</span>
            </div>
        );
    }
}

export default FilterString;

