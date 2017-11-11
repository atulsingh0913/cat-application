const fetchedCatListSucess = (cats) => {
	return {
	  type: 'FETCH_CAT_LIST_SUCCESS',
	  cats
	}
}

const fetchedCategoriesListSucess = (categories) => {
	return {
	  type: 'FETCH_CATEGORIES_LIST_SUCCESS',
	  categories
	}
}

const fetchCatDetailsSucess = (catDetails) => {
	return {
	  type: 'FETCH_CAT_DETAILS_SUCCESS',
	  catDetails
	}
}

export const fetchCatList = () => dispatch => {
  	return fetch('/cats')
    .then(response => response.json())
    .then(json => dispatch(fetchedCatListSucess(json)))
    .catch((err) => {
		console.log(err);
	});
}

export const fetchCatDetails = () => dispatch => {
  	return fetch('/catdetails')
    .then(response => response.json())
    .then(json => dispatch(fetchCatDetailsSucess(json)))
    .catch((err) => {
		console.log(err);
	});
}

export const fetchCategoryList = () => dispatch => {
  	return fetch('/categories')
    .then(response => response.json())
    .then(json => dispatch(fetchedCategoriesListSucess(json)))
    .catch((err) => {
		console.log(err);
	});
}
