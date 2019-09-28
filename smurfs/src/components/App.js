import React, { useEffect } from "react";
import "./App.css";

import { connect } from 'react-redux';

import { getSmurfs } from '../actions';

function App(props) {
  useEffect(() => {
    props.getSmurfs();
  }, [])

  return (
  <div>
    {props.smurfs.map((smurf) => <p>{smurf.name}</p>)}
  </div>);
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    isFetching: state.isFetching
  }
}
 
export default connect(mapStateToProps, { getSmurfs })(App);
