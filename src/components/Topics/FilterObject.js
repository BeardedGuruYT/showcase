import React, { Component } from 'react';

class FilterObject extends Component {

constructor () {
    super();
        this.state={
            unFilteredArray: [{
                name:"billy",
                type: "dog",
                age:10, 
                ageInDogYears: 70
            },
            {
                name: "jefferson",
                type: "bunny",
                PoopsADay: 39,
            },
            {
                name:"pally",
                color:"bole/green",
                age:75,
            }],

            userInput:"",
            filteredArray:[]

        }
    }


    getUserInput(e) {
        this.setState({userInput: e.target.value})

    }


    solve() {
        var filtered = this.state.unfilteredArray.filter((pet)=> pet[this.state.userInput] !== undefined)
        this.setState({ filteredArray: filtered })
    }

    render() {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Objects</h4>
                <span className="puzzleText">Original:  [{ unfilteredArray }] </span>
                <input className="inputLine"
                        onChange ={(e)=> this.getUserInput(e)}></input>
                <button className="confirmationButton"
                onClick = {(e) => this.solve() }>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: [{ filteredArray }]</span>
            </div>
        );
    }
}

export default FilterObject;