import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/homepage/Home'
import Login from './pages/loginpage/Login'
import Signin from './pages/signinpage/Signin'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Search from './pages/searchpage/Search'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getCollegeList } from '../redux/Action/PropertyAction'
import {getUniversityCourseWeb} from '../redux/Action/universityCourseAction'
import DetailPage from './pages/detailsPage/DetailPage'
import ComparePage from './pages/comparePage/ComparePage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import PredictorPage from './pages/predictorPage/PredictorPage'

function App() {

  const dispatch = useDispatch()
  
  const compareClg = useSelector(state=>state?.university?.compareClg)
  // Search Colleges state
  const [search, setSearch] = useState('');
  const [ Fees , setFees] = useState("0")
  const [City , setCity]=useState([])
  const [State , setState]=useState([])
  const [Type , setType]=useState([])
  const [ SelectedCourse , setSelectedCourse] = useState("")
  const [filteredList,setFilteredList] = useState([]) 
  const [isFilterApplied,setIsFilterApplied] = useState(false)
  const [searchResult, setSearchResult] = useState([]);
  const [isUrlQuery,setUrlQuery] = useState(false)

  // Compare Colleges states
  const [compareMultiClg,setCompareMultiClg] = useState(true)
  const [compareArray,setCompareArray] = useState(compareClg || [])
  const [isCompareOpen, setIsCompareOpen] = useState(false)
  const [clgIndex,setClgIndex] = useState()
  
  useEffect(()=>{
    dispatch(getCollegeList());
    dispatch(getUniversityCourseWeb());
  },[])

  const college = useSelector(state=>state.property.property.colleges)
  let course = useSelector(state=>state?.university?.universityCourses).map(course=>course.name)
  const filteredcollege = useSelector(state=>state?.university?.college)
  let universityCourses = [...new Set(course)]

  // Search Colleges related functions and logics
  const ClearFilter = ()=>{
    setCity([]);
    setState([]);
    setType([]);
    // navigate('/search')
  }


  const cityFilter = [...new Set(college
  ?.filter(item => (item?.property_district !== 'undefined' ? item.property_district : null))
  .map(item => item.property_district))]
  
  const typeFilter = [...new Set(college
  ?.filter(item => (item?.college_type !== 'undefined' ? item.college_type : null))
  .map(item => item.college_type))];

  const stateFilter = [...new Set(college
  ?.filter(item => (item?.property_state !== 'undefined' ? item.property_state : null))
  .map(item => item.property_state))];
  
  useEffect(()=>{
    if(search){
      ClearFilter();
      const result = college?.filter(item=>
        item?.name?.toLowerCase()?.includes(search.trim()?.toLowerCase()) || 
        item?.email?.toLowerCase()?.includes(search.trim()?.toLowerCase()) || 
        item?.college_type?.toLowerCase()?.includes(search.trim()?.toLowerCase()) || 
        item?.property_district?.toLowerCase()?.includes(search.trim()?.toLowerCase()) || 
        item?.property_state?.toLowerCase()?.includes(search.trim()?.toLowerCase())
      );
      const mergedResult = [...new Set(result)];
      setFilteredList(mergedResult);
    }
  },[search])
  
  useEffect(() => {
    // Check if there are query parameters in the URL
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.toString()) {
      setUrlQuery(true);
    }
  }, []);

  useEffect(() => {
    if(!search){
      if (Type?.length > 0 && City?.length === 0 && State?.length === 0) {
        //only type filters are selected
        const result = Type.flatMap(type => college?.filter(item => item?.college_type === type));
        setFilteredList(result);
      } else if (Type?.length === 0 && City?.length > 0 && State?.length === 0) {
        // only city filters are selected
        const result = City.flatMap(city => college?.filter(item => item?.property_district === city));
        setFilteredList(result);
      } else if (Type?.length === 0 && City?.length === 0 && State?.length > 0) {
        //only state filters are selected
        const result = State.flatMap(state => college?.filter(item => item?.property_state === state));
        setFilteredList(result);
      } else if (Type?.length > 0 && City?.length > 0 && State?.length === 0) {
        // type and city filters selected
        const result = Type.flatMap(type => college?.filter(item => item?.college_type === type));
        const result2 = City.flatMap(city => college?.filter(item => item?.property_district === city));
        const mergedResult = [...new Set([...result, ...result2])];
        setFilteredList(mergedResult);
      } else if (Type?.length === 0 && City?.length > 0 && State?.length > 0) {
        // city and state filters selected
        const result2 = City.flatMap(city => college?.filter(item => item?.property_district === city));
        const result3 = State.flatMap(state => college?.filter(item => item?.property_state === state));
        const mergedResult = [...new Set([...result2, ...result3])];
        setFilteredList(mergedResult);
      } else if (Type?.length > 0 && City?.length === 0 && State?.length > 0) {
        // type and state filters selected
        const result = Type.flatMap(type => college?.filter(item => item?.college_type === type));
        const result3 = State.flatMap(state => college?.filter(item => item?.property_state === state));
        const mergedResult = [...new Set([...result, ...result3])];
        setFilteredList(mergedResult);
      } else if (Type?.length > 0 && City?.length > 0 && State?.length > 0) {
        // type, city and state all filters are selected
        const result = Type.flatMap(type => college?.filter(item => item?.college_type === type));
        const result2 = City.flatMap(city => college?.filter(item => item?.property_district === city));
        const result3 = State.flatMap(state => college?.filter(item => item?.property_state === state));
        const mergedResult = [...new Set([...result, ...result2, ...result3])];
        setFilteredList(mergedResult);
      } else if (Type?.length === 0 && City?.length === 0 && State?.length === 0) {
        //no filters selected
        setFilteredList([]);
      }
    }
  }, [Type, City, State]);

  useEffect(()=>{
    if(SelectedCourse != ''  && !search && Type?.length === 0 && City?.length === 0 && State?.length === 0 ){
      
      const mergedResult = [...new Set(filteredcollege)];
      setFilteredList(mergedResult);
      
    }
  },[SelectedCourse,filteredcollege])

  useEffect(()=>{
    if(SelectedCourse ||search || Type?.length > 0 || City?.length > 0 || State?.length > 0 ){
      // filter applied
      setIsFilterApplied(true);

    }else if (!SelectedCourse && !search && Type?.length === 0 && City?.length === 0 && State?.length === 0) {
      // filter not applied
      setIsFilterApplied(false);

    }else{
      setIsFilterApplied(false);

    }
  },[Type, City, State, search, SelectedCourse])

  return (
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/' element={
          <Home 
            search={search} 
            setSearch={setSearch}
            SelectedCourse={SelectedCourse}
            setSelectedCourse={setSelectedCourse} 
          />}/>
          <Route path='/Login' element={<Login />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Search' element={
          <Search
            isUrlQuery={isUrlQuery}
            setUrlQuery={setUrlQuery}
            setFilteredList={setFilteredList}
            clgIndex={clgIndex}
            setClgIndex={setClgIndex}
            compareArray={compareArray}
            setCompareArray={setCompareArray}
            isCompareOpen={isCompareOpen}
            setIsCompareOpen={setIsCompareOpen}
            compareMultiClg={compareMultiClg}
            setCompareMultiClg={setCompareMultiClg}
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
            collegeList={isFilterApplied ? filteredList : college}
            cityFilter={cityFilter}
            stateFilter={stateFilter}
            typeFilter={typeFilter}
            SelectedCourse={SelectedCourse}
            setSelectedCourse={setSelectedCourse}
          />} />
          <Route path='/detail/:clgid' element={<DetailPage/>} />
          <Route path='/compare' element={
            <ComparePage
              clgIndex={clgIndex}
              setClgIndex={setClgIndex}
              isCompareOpen={isCompareOpen}
              setIsCompareOpen={setIsCompareOpen}
              compareMultiClg={compareMultiClg}
              setCompareMultiClg={setCompareMultiClg}
              compareArray={compareArray}
              setCompareArray={setCompareArray}
            />} 
          />
          <Route path='/college-predictor' element={<PredictorPage setSelectedCourse={setSelectedCourse} />}/>
          {/* <Route path='*' element={ <ErrorPage/> }/> */}
        </Routes>
      </BrowserRouter>
  )
}

export default App
