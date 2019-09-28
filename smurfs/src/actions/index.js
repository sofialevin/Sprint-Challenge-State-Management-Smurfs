import axios from 'axios';

export const SMURFS_START = 'SMURFS_START';
export const SMURFS_SUCCESS = 'SMURFS_SUCCESS';
export const SMURFS_FAIL = 'SMURFS_FAIL';

export const getSmurfs = () => dispatch => {
  dispatch({ type: SMURFS_START });
  axios
  .get(`http://localhost:3333/smurfs`)
  .then(res => {
      dispatch({ type: SMURFS_SUCCESS, payload: res })
  })
  .catch(err => dispatch({ type: SMURFS_FAIL, payload: err }));
};

export const createSmurfs = (newSmurf) => dispatch => {
    dispatch({ type: SMURFS_START });
    axios
    .post(`http://localhost:3333/smurfs`, {
        newSmurf
    })
    .then(res => {
        dispatch({ type: SMURFS_SUCCESS, payload: res })
    })
    .catch(err => dispatch({ type: SMURFS_FAIL, payload: err }));
  };