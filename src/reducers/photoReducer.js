export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PHOTO':
      return Object.assign({}, action.payload)
    default:
      return state
  }
}
