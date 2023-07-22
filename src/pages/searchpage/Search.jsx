import React, { useEffect, useState } from 'react'
import Searchnav from '../../components/Searchnav'
import Searchupnav from '../../components/Searchupnav'
import Subbar from '../../components/Subbar'
import Touch from '../../components/Touch'
import Footer from '../../components/Footer'
import './Search.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCollegeList } from '../../../redux/Action/PropertyAction'

function Search({search, setSearch, Fees, setFees, City, setCity, Type, setType, State, setState, collegeList, cityFilter, stateFilter, typeFilter, ClearFilter}) {
  const dispatch = useDispatch()
  
  return (
    <div className='search-page'>
        <Searchupnav/>
        <Searchnav 
          search={search}
          setState={setState}
          setSearch={setSearch}
          setType={setType}
          setCity={setCity}  
          ClearFilter={ClearFilter}        
        />
        <Subbar
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
        />
        <Touch/>
        <Footer/>

    </div>
  )
}

export default Search