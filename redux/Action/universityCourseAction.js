import API from "../../services/API";
import { GET_UNIVERSITY_COURSE_LIST, SUCCESS_UNIVERSITY_COURSE_LIST, FAILURE_UNIVERSITY_COURSE_LIST, GET_COLLEGE_FOR_SELECTED_COURSE, SUCCESS_COLLEGE_FOR_SELECTED_COURSE,FAILURE_COLLEGE_FOR_SELECTED_COURSE,GET_COMPARED_COLLEGE_LIST,SUCCESS_COMPARED_COLLEGE_LIST,FAILURE_COMPARED_COLLEGE_LIST } from "../Constants/Constants";
import { toast } from 'react-toastify';

export const getUniversityCourseWeb = () => async (dispatch) => {
    try {
        dispatch({type:GET_UNIVERSITY_COURSE_LIST});
        const {data} = await API.get(`/getUniversityCourseWeb`)
        dispatch({type: SUCCESS_UNIVERSITY_COURSE_LIST, payload: data })
    } catch (error) {
        dispatch({
            type: FAILURE_UNIVERSITY_COURSE_LIST
        });
        // toast.error(error?.message)
    }
};

export const getCollegesForSelectedCourse = (course) => async (dispatch) => {
    try {
        if(course!=''){
            dispatch({type:GET_COLLEGE_FOR_SELECTED_COURSE});
            const {data} = await API.get(`/getCollegesForSelectedCourse/${course}`)
            dispatch({type: SUCCESS_COLLEGE_FOR_SELECTED_COURSE, payload: data })
        }
    } catch (error) {
        dispatch({
            type: FAILURE_COLLEGE_FOR_SELECTED_COURSE
        });
        // toast.error(error?.message)
    }
};

export const getWebCompareCollegeList = (value) => async (dispatch) => {
    try {
        dispatch({ type: GET_COMPARED_COLLEGE_LIST });
        const { data } = await API.post(`/getWebCompareCollegeList`,value);
        dispatch({ type: SUCCESS_COMPARED_COLLEGE_LIST, payload: data });
    } catch (error) {
        dispatch({
            type: FAILURE_COMPARED_COLLEGE_LIST
        });
        // toast.error(error?.message)
    }
};