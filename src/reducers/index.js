import { combineReducers } from 'redux'
import catList from './catList';
import categoryList from './categoryList';
import catDetails from './catDetails';

const catApp = combineReducers({
  catList,
  categoryList,
  catDetails
})

export default catApp