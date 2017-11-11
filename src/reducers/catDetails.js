const catDetails = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CAT_DETAILS_SUCCESS':
      const { catDetails=[] } = action;
      return { ...state, items: catDetails }
    default:
      return state
  }
}

export default catDetails