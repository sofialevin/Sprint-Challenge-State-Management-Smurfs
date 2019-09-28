import { SMURFS_START, SMURFS_SUCCESS, SMURFS_FAIL } from '../actions';

const initialState = {
  smurfs: [],
  error: '',
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log('reducer', action)
  switch (action.type) {
    case SMURFS_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: ''
      };
    case SMURFS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;