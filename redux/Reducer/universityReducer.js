import { SUCCESS_UNIVERSITY_COURSE_LIST, SUCCESS_COLLEGE_FOR_SELECTED_COURSE, SUCCESS_COMPARED_COLLEGE_LIST, } from "../Constants/Constants";

let initState = {
    universityCourses: [],
    college:[],
    compareClg :[]
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
        case SUCCESS_COMPARED_COLLEGE_LIST:
        return ({
            ...state,
            compareClg: action.payload
        });
        default:
            return state;
    }
};
export default universityReducer;
