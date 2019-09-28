import React, { Component } from "react";
import "./App.css";

import { connect } from 'react-redux';

import { getSmurfs, createSmurfs } from '../actions';

function App() {



  return (
  <div>

  </div>);
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    isFetching: state.isFetching
  }
}
 
export default connect(mapStateToProps, { getSmurfs, createSmurfs })(App);
