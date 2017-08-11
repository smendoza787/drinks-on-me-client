export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BARS':
      return action.bars;
    default:
      return state;
  }
}
