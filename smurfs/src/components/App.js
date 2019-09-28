import React, { useEffect } from "react";
import "./App.css";
import 'semantic-ui-css/semantic.min.css';

import { connect } from 'react-redux';

import { getSmurfs, createSmurfs } from '../actions';

import SmurfsForm from './SmurfsForm';

function App(props) {

  useEffect(() => {
    props.getSmurfs();
  }, [])

  const newSmurf = (smurf) => {
    props.createSmurfs(smurf);
  }

  return (
    <div>
      <SmurfsForm newSmurf={newSmurf}/>
       <div>
        {props.smurfs.map((smurf) => 
        <div>
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
        </div>
        
        )}
      </div>
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
 
export default connect(mapStateToProps, { getSmurfs, createSmurfs })(App);
