const catList = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CAT_LIST_SUCCESS':
      const { cats=[] } = action;
      return { ...state, items: cats }
    default:
      return state
  }
}

export default catList