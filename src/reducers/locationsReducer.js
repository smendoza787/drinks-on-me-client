export default (state = { latitude: "", longitude: "" }, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      const { latitude, longitude } = action.payload;
      return {
        latitude: latitude,
        longitude: longitude
      }
    default:
      return state;
  }
}
