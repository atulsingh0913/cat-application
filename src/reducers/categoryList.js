const categoryList = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CATEGORIES_LIST_SUCCESS':
      const { categories=[] } = action;
      return { ...state, items: categories }
    default:
      return state
  }
}

export default categoryList