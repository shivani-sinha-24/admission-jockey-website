import { SUCCESS_COLLEGE_LIST } from '../Constants/Constants';

let initState = {
    property: [],
}

const propertyReducer = (state = initState, action) => {
    switch (action.type) {
        case SUCCESS_COLLEGE_LIST:
            return ({
                ...state,
                property: action.payload
            });
        default:
            return state;
    }
};
export default propertyReducer;
