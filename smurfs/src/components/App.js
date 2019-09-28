import React, { useEffect } from "react";
import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import { Card } from 'semantic-ui-react';

import { connect } from 'react-redux';

import { getSmurfs, createSmurfs, deleteSmurfs } from '../actions';

import SmurfsForm from './SmurfsForm';
import SmurfCard from './SmurfCard';

function App(props) {

  useEffect(() => {
    props.getSmurfs();
  }, [])

  return (
    <div className="App">
      <SmurfsForm createSmurfs={props.createSmurfs}/>
       <Card.Group>
        {props.smurfs.map((smurf) => <SmurfCard smurf={smurf} deleteSmurfs={props.deleteSmurfs}/>
        )}
      </Card.Group>
    </div>
 );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    isFetching: state.isFetching
  }
}
 
export default connect(mapStateToProps, { getSmurfs, createSmurfs, deleteSmurfs })(App);
