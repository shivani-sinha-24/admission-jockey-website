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
import { useSearchParams } from 'react-router-dom'
import { getCollegesForSelectedCourse } from '../../../redux/Action/universityCourseAction'

function Search({isUrlQuery,ClearFilter,setUrlQuery,setFilteredList,clgIndex,setClgIndex,compareArray,setCompareArray,isCompareOpen, setIsCompareOpen,compareMultiClg,setCompareMultiClg,search, setSearch, Fees, setFees, City, setCity, Type, setType, State, setState, collegeList, cityFilter, stateFilter, typeFilter, SelectedCourse , setSelectedCourse}) {

  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const college = useSelector(state=>state.property.property.colleges)
  let course = useSelector(state=>state?.university?.universityCourses).map(course=>course.name)
  const filteredcollege = useSelector(state=>state?.university?.college)
  let universityCourses = [...new Set(course)]

  const handleOpenModal = () => {
    setIsCompareOpen(!isCompareOpen)
    setCompareArray([]);
  };
  
  const [queryFilter,setQueryFilter] = useState([])
  const courseParam = searchParams.get('course');
  const cityParam = searchParams.get('city');
  const stateParam = searchParams.get('state');
  const typeParam = searchParams.get('type');
  const queryParam = searchParams.get('query');

  //setting filter query in search query params in url
  useEffect(() => {
    if(!search){
      if (Type?.length > 0 && City?.length == 0 && State?.length == 0) {
        //only type filters are selected
        setSearchParams((prevSearchParams) => {
          return { ...prevSearchParams, type: Type?.length>0&&`${Type}` };
        });
      } else if (Type?.length == 0 && City?.length > 0 && State?.length == 0) {
        // only city filters are selected
        setSearchParams((prevSearchParams) => {
          return { ...prevSearchParams, city: City?.length>0&&`${City}` };
        });
      } else if (Type?.length == 0 && City?.length == 0 && State?.length > 0) {
        //only state filters are selected
        setSearchParams((prevSearchParams) => {
          return { ...prevSearchParams, state: State?.length>0&&`${State}` };
        });
      } else if (Type?.length > 0 && City?.length > 0 && State?.length == 0) {
        // type and city filters selected
        setSearchParams((prevSearchParams) => {
          return { ...prevSearchParams, type: Type?.length>0&&`${Type}`,city:City?.length>0&&`${City}` };
        });
      } else if (Type?.length == 0 && City?.length > 0 && State?.length > 0) {
        // city and state filters selected
        setSearchParams((prevSearchParams) => {
          return { ...prevSearchParams, state: State?.length>0&&`${State}`,city:City?.length>0&&`${City}` };
        });
      } else if (Type?.length > 0 && City?.length == 0 && State?.length > 0) {
        // type and state filters selected
        setSearchParams((prevSearchParams) => {
          return { ...prevSearchParams, type: Type?.length>0&&`${Type}`,state:State?.length>0&&`${State}` };
        });
      } else if (Type?.length > 0 && City?.length > 0 && State?.length > 0) {
        // type, city and state all filters are selected
        setSearchParams((prevSearchParams) => {
          return { ...prevSearchParams,  city: `${City}`, state:State?.length>0&&`${State}`, type: Type?.length>0&&`${Type}`};
        });
      } else if (Type?.length == 0 && City?.length == 0 && State?.length == 0) {
        //no filters selected
        return
      }
    }
    setSelectedCourse('')
  }, [Type, City, State]);

  //setting search query  params in url
  const handleSearchClick = (query) => {
    // Set the search query parameter
    setSearchParams({ search: query });

    if(search!=''){

      setSearchParams((prevSearchParams) => {
        return { ...prevSearchParams, query: `${search}` };
      });
    }else{
      setSearchParams((prevSearchParams) => {
          return { ...prevSearchParams};
      })
    }
  }

  //setting selected course in search url query params
  useEffect(()=>{
    if(courseParam!=''){
      if(SelectedCourse != ''  && !search && Type?.length == 0 && City?.length == 0 && State?.length == 0 ){
        
        setSearchParams((prevSearchParams) => {
          return { ...prevSearchParams, course: SelectedCourse };
        });
        
      }
    }else{
      navigate('/search')
    }
  },[SelectedCourse,courseParam])
  
  //getting colleges according to url filter applied
  useEffect(() => {
    if (isUrlQuery && searchParams) {

      //Change params query string into array
      const cityArray = cityParam ? cityParam?.split(',').map(city => city?.trim()) : [];
      const stateArray = stateParam ? stateParam?.split(',').map(state => state?.trim()) : [];
      const typeArray = typeParam ? typeParam?.split(',').map(type => type?.trim()) : [];

      // ... Your filter logic in search.jsx
      if (typeArray?.length > 0 && cityArray?.length === 0 && stateArray?.length === 0) {
        //only type filters are selected
        setType(typeArray)
        const result = typeArray.flatMap(type => college?.filter(item => item?.college_type === type));
        setQueryFilter(result);
      } else if (typeArray?.length === 0 && cityArray?.length > 0 && stateArray?.length === 0) {
        // only city filters are selected
        setCity(cityArray)
        const result = cityArray.flatMap(city => college?.filter(item => item?.property_district === city));
        setQueryFilter(result);
      } else if (typeArray?.length === 0 && cityArray?.length === 0 && stateArray?.length > 0) {
        //only state filters are selected
        setState(stateArray)
        const result = stateArray.flatMap(state => college?.filter(item => item?.property_state === state));
        setQueryFilter(result);
      } else if (typeArray?.length > 0 && cityArray?.length > 0 && stateArray?.length === 0) {
        // type and city filters selected
        setType(typeArray);setCity(cityArray);
        const result = typeArray.flatMap(type => college?.filter(item => item?.college_type === type));
        const result2 = cityArray.flatMap(city => college?.filter(item => item?.property_district === city));
        const mergedResult = [...new Set([...result, ...result2])];
        setQueryFilter(mergedResult);
      } else if (typeArray?.length === 0 && cityArray?.length > 0 && stateArray?.length > 0) {
        // city and state filters selected
        setCity(cityArray);setState(stateArray)
        const result2 = cityArray.flatMap(city => college?.filter(item => item?.property_district === city));
        const result3 = stateArray.flatMap(state => college?.filter(item => item?.property_state === state));
        const mergedResult = [...new Set([...result2, ...result3])];
        setQueryFilter(mergedResult);
      } else if (typeArray?.length > 0 && cityArray?.length === 0 && stateArray?.length > 0) {
        // type and state filters selected
        setType(typeArray);setState(stateArray);
        const result = typeArray.flatMap(type => college?.filter(item => item?.college_type === type));
        const result3 = stateArray.flatMap(state => college?.filter(item => item?.property_state === state));
        const mergedResult = [...new Set([...result, ...result3])];
        setQueryFilter(mergedResult);
      } else if (typeArray?.length > 0 && cityArray?.length > 0 && stateArray?.length > 0) {
        // type, city and state all filters are selected
        setType(typeArray);setState(stateArray);setCity(cityArray)
        const result = typeArray.flatMap(type => college?.filter(item => item?.college_type === type));
        const result2 = cityArray.flatMap(city => college?.filter(item => item?.property_district === city));
        const result3 = stateArray.flatMap(state => college?.filter(item => item?.property_state === state));
        const mergedResult = [...new Set([...result, ...result2, ...result3])];
        setQueryFilter(mergedResult);
      } else if (typeArray?.length === 0 && cityArray?.length === 0 && stateArray?.length === 0) {
        //no filters selected
        setFilteredList([]);
        setQueryFilter([]);
      }
      setSelectedCourse('')
    }
  }, [isUrlQuery, searchParams, college]);

  //getting colleges according to search query in url
  useEffect(()=>{
    if(isUrlQuery && searchParams && queryParam){
      ClearFilter();
      const result = college?.filter(item=>
        item?.name?.toLowerCase()?.includes(queryParam.trim()?.toLowerCase()) || 
        item?.email?.toLowerCase()?.includes(queryParam.trim()?.toLowerCase()) || 
        item?.college_type?.toLowerCase()?.includes(queryParam.trim()?.toLowerCase()) || 
        item?.property_district?.toLowerCase()?.includes(queryParam.trim()?.toLowerCase()) || 
        item?.property_state?.toLowerCase()?.includes(queryParam.trim()?.toLowerCase())
      );
      const mergedResult = [...new Set(result)];
      setQueryFilter(mergedResult);
    }
  },[isUrlQuery, searchParams, college])

  //getting colleges according to course selected in url
  useEffect(()=>{
    if(isUrlQuery && searchParams){
      if(courseParam){
        // //need to work on it
        setSelectedCourse(courseParam)
        dispatch(getCollegesForSelectedCourse(courseParam));
        const mergedResult = [...new Set(filteredcollege)];
        setQueryFilter(mergedResult);
      }
    }
  },[isUrlQuery, searchParams, college])

  useEffect(()=>{
    const mergedResult = [...new Set(filteredcollege)];
    setQueryFilter(mergedResult);
  },[filteredcollege])

  useEffect(()=>{
    if(courseParam || typeParam || queryParam || cityParam || stateParam){
      setUrlQuery(true)
    }else{
      setUrlQuery(false)
    }
  },[searchParams,courseParam,typeParam,queryParam,cityParam,stateParam])

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
          handleSearchClick={handleSearchClick}
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
          setSearchParams={setSearchParams}
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
          collegeList={isUrlQuery?queryFilter:collegeList}
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