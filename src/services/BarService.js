const BarService = {
  fetchBars: () => {
    debugger;
    return fetch('/bars')
      .then(response => response.json())
  }
}

export default BarService;
