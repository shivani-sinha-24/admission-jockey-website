import React, { useEffect, useState } from 'react'
import './ComparePage.css'
import CompareTopNav from '../../components/compareTopNav/CompareTopNav'
import Compare2ndNav from '../../components/compare2ndNav/Compare2ndNav'
import CompareDesc from '../../components/compareDesc/CompareDesc'
import CompareMainContent from '../../components/compareMainContent/CompareMainContent'
import CompFoote from '../../components/compFooter/CompFoote'
import Modal from '../../modals/CompareModal/CompareModal'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getWebCompareCollegeList } from '../../../redux/Action/universityCourseAction'

const ComparePage = ({clgIndex,setClgIndex,compareArray,setCompareArray,isCompareOpen, setIsCompareOpen,compareMultiClg,setCompareMultiClg}) => {

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsCompareOpen(!isCompareOpen)
    setCompareArray([]);
  };
  useEffect(()=>{
    dispatch(getWebCompareCollegeList())
  },[])

  const [courseArray1, setCourseArray1] = useState([]);
  const [courseArray2, setCourseArray2] = useState([]);
  const [courseArray3, setCourseArray3] = useState([]);
  const [courseArray4, setCourseArray4] = useState([]);

  const comparedClg = useSelector(state=>state?.university?.compareClg)

  useEffect(() => {
    const fetchCourseData = async (namesArray, setCourseArray) => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/get-college-courses/compare`, namesArray);
        const arrayOfArrays = response?.data;
        const mergedArray = [].concat(...arrayOfArrays);
        setCourseArray(mergedArray);
      } catch (error) {
        console.log(error);
      }
    };

    if (comparedClg[0]) {
      fetchCourseData(comparedClg[0]?.edu_type=='University'?[comparedClg[0]?.name]:comparedClg[0]?.affilite_by, setCourseArray1);
      // fetchCourseData(comparedClg[0]?.affilite_by, setCourseArray1);
    }
    if (comparedClg[1]) {
      fetchCourseData(comparedClg[1]?.edu_type=='University'?[comparedClg[1]?.name]:comparedClg[1]?.affilite_by, setCourseArray2);
      // fetchCourseData(comparedClg[1]?.affilite_by, setCourseArray2);
    }
    if (comparedClg[2]) {
      fetchCourseData(comparedClg[2]?.edu_type=='University'?[comparedClg[2]?.name]:comparedClg[2]?.affilite_by, setCourseArray3);
      // fetchCourseData(comparedClg[2]?.affilite_by, setCourseArray3);
    }
    if (comparedClg[3]) {
      fetchCourseData(comparedClg[3]?.edu_type=='University'?[comparedClg[3]?.name]:comparedClg[3]?.affilite_by, setCourseArray4);
      // fetchCourseData(comparedClg[3]?.affilite_by, setCourseArray4);
    }
  }, [comparedClg]);
  
  return (
    <div className='compare-page'>
      {isCompareOpen && (
        <Modal
          clgIndex={clgIndex}
          setClgIndex={setClgIndex}
          compareMultiClg={compareMultiClg}
          setCompareMultiClg={setCompareMultiClg}
          isOpen={isCompareOpen}
          setIsOpen={setIsCompareOpen}
          onRequestClose={handleOpenModal}
          compareArray={compareArray}
          setCompareArray={setCompareArray}
        />
      )}
      <CompareTopNav/>
      <Compare2ndNav/>
      <CompareDesc/>
      <CompareMainContent
        courseArray1={courseArray1}
        courseArray2={courseArray2}
        courseArray3={courseArray3}
        courseArray4={courseArray4}
        clgIndex={clgIndex}
        setClgIndex={setClgIndex}
        compareArray={compareArray}
        setCompareArray={setCompareArray}
        isCompareOpen={isCompareOpen}
        setIsCompareOpen={setIsCompareOpen}
        compareMultiClg={compareMultiClg}
        setCompareMultiClg={setCompareMultiClg}
      />
      <CompFoote/>
    </div>
  )
}

export default ComparePage
