import { SUCCESS_UNIVERSITY_COURSE_LIST, SUCCESS_COLLEGE_FOR_SELECTED_COURSE, } from "../Constants/Constants";

let initState = {
    universityCourses: [],
    college:[]
}

const universityReducer = (state = initState, action) => {
    switch (action.type) {
        case SUCCESS_UNIVERSITY_COURSE_LIST:
            return ({
                ...state,
                universityCourses: action.payload
            });
        case SUCCESS_COLLEGE_FOR_SELECTED_COURSE:
            return({
                ...state,
                college :action.payload
            })
        default:
            return state;
    }
};
export default universityReducer;
