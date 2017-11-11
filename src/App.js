import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchCatList } from './actions'


class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }

  componentDidMount(){
    this.props.fetchCatList();
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {

  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchCatList: () => {
      dispatch(fetchCatList());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);