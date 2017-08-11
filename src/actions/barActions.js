import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

export function fetchBars() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BARS' });
    return fetch(`${API_URL}/bars`)
      .then(response => response.json())
      .then(bars => dispatch({ type: 'FETCH_BARS', payload: bars }));
  }
}