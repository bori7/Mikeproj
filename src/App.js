import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
// import {SideBar} from './components/sidebar/side-bar.component';
import CustomizedTables from './components/table/table';
import OrderSortingGrid from './components/table/table2';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>

      <h1>Data Analysis</h1>
      
        {/* <SideBar/> */}
        {/* <SearchBox onSearchChange={this.onSearchChange} /> */}
        {/* <CustomizedTables/> */}
        <OrderSortingGrid/>
        {/* <CardList monsters={filteredMonsters} /> */}
        
        
      </div>
    );
  }
}

export default App;
