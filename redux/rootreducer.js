import { combineReducers } from 'redux';
import propertyReducer from './Reducer/propertyReducer';
import universityReducer from './Reducer/universityReducer';
const reducer = combineReducers({
    property:propertyReducer,
    university: universityReducer,
});
export default reducer;
