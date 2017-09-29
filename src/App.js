import React, { Component } from 'react';
import TopicBrowser from './components/TopicBrowser/TopicBrowser';
import EvenAndOdd from './components/Topics/EvenAndOdd';
import FilterObject from './components/Topics/FilterObject';
import FilterString from './components/Topics/FilterString';
import Palindrome from './components/Topics/Palindrome';
import Sum from './components/Topics/Sum';

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        <TopicBrowser />
        <EvenAndOdd />
        <FilterObject />
      </div>
=======
       <TopicBrowser />
       <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
>>>>>>> 9fac5f62dfb22b073fc59c4ed772d8a1dee1ecce

    );
  }
}

export default App;
