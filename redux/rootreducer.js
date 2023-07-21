import { combineReducers } from 'redux';
import propertyReducer from './Reducer/propertyReducer';
const reducer = combineReducers({
    property:propertyReducer
});
export default reducer;
