import API from "../../services/API";
import { FAILURE_COLLEGE_LIST, SUCCESS_COLLEGE_LIST, GET_COLLEGE_LIST, GET_UNIVERSITY_COURSE_LIST, SUCCESS_UNIVERSITY_COURSE_LIST, FAILURE_UNIVERSITY_COURSE_LIST } from "../Constants/Constants";
import { ToastContainer, toast } from 'react-toastify';

export const getCollegeList = () => async (dispatch) => {
    try {
        dispatch({ type: GET_COLLEGE_LIST });
        const { data } = await API.get(`/getWebCollegeList`);
        dispatch({ type: SUCCESS_COLLEGE_LIST, payload: data });
    } catch (error) {
        dispatch({
            type: FAILURE_COLLEGE_LIST
        });
        // toast.error(error?.message)
    }
};