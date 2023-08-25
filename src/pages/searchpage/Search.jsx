import React, { useEffect, useState } from 'react'
import Searchnav from '../../components/Searchnav'
import Searchupnav from '../../components/Searchupnav'
import Subbar from '../../components/Subbar'
import Touch from '../../components/Touch'
import Footer from '../../components/Footer'
import './Search.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCollegeList } from '../../../redux/Action/PropertyAction'
import Modal from '../../modals/CompareModal/CompareModal'

function Search({clgIndex,setClgIndex,compareArray,setCompareArray,isCompareOpen, setIsCompareOpen,compareMultiClg,setCompareMultiClg,search, setSearch, Fees, setFees, City, setCity, Type, setType, State, setState, collegeList, cityFilter, stateFilter, typeFilter, ClearFilter,SelectedCourse , setSelectedCourse}) {

  let course = useSelector(state=>state?.university?.universityCourses).map(course=>course.name)
  let universityCourses = [...new Set(course)]

  
  const handleOpenModal = () => {
    setIsCompareOpen(!isCompareOpen)
    setCompareArray([]);
  };

  return (
    <div className='search-page'>
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
        <Searchupnav/>
        <Searchnav 
          compareMultiClg={compareMultiClg}
          setCompareMultiClg={setCompareMultiClg}
          search={search}
          setState={setState}
          setSearch={setSearch}
          setType={setType}
          setCity={setCity}  
          ClearFilter={ClearFilter}        
        />
        <Subbar
          compareMultiClg={compareMultiClg}
          setCompareMultiClg={setCompareMultiClg}
          compareArray={compareArray}
          setCompareArray={setCompareArray}
          isOpen={isCompareOpen}
          setIsOpen={setIsCompareOpen}
          universityCourses={universityCourses}
          ClearFilter={ClearFilter}
          search={search}
          setSearch={setSearch}
          Fees={Fees}
          setFees={setFees}
          City={City}
          setCity={setCity}
          Type={Type}
          setType={setType}
          State={State}
          setState={setState}
          collegeList={collegeList}
          city={cityFilter}
          state={stateFilter}
          collegeType={typeFilter}
          SelectedCourse={SelectedCourse}
          setSelectedCourse={setSelectedCourse}
        />
        <Touch/>
        <Footer/>

    </div>
  )
}

export default Search