import React, { useEffect, useState } from 'react'
import Modal from "react-modal";
import './CompareModal.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCollegeList } from '../../../redux/Action/PropertyAction';
import { getWebCompareCollegeList } from '../../../redux/Action/universityCourseAction';

const modal = ({clgIndex,setClgIndex,compareMultiClg, setCompareMultiClg, isOpen, setIsOpen, onRequestClose, compareArray,setCompareArray}) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [compareButtonClicked, setCompareButtonClicked] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    dispatch(getCollegeList())
  },[])
  
  const collegeswith1stitem = useSelector(state=>state?.property?.property?.colleges)
  const collegeswithout1stitem = useSelector(state=>state?.property?.property?.colleges).filter(clg => clg?._id !== compareArray[0]?._id);
  const displayedColleges = !compareMultiClg ? collegeswith1stitem : collegeswithout1stitem;

  const toggleClgAdd = (clg)=>{
    if (!compareMultiClg) {
      // Add the college at the specific index if compareMultiClg is false
      addCollegeAtIndex(clg, clgIndex);
      
    } else {
      // Check if the college is already in the compareArray
      const isAlreadyAdded = compareArray.some(college => college._id === clg._id);
  
      // If the college is already in the array, remove it; otherwise, add it
      if (isAlreadyAdded) {
        const updatedCompareArray = compareArray.filter(college => college._id !== clg._id);
        setCompareArray(updatedCompareArray);
      } else {
        if (compareArray.length >= 4) {
          alert("You can only add up to 3 colleges for comparison.");
          return;
        }
        setCompareArray([...compareArray, clg]);
      }
    }
  }
console.log(compareArray );
  // Function to add a single college at a specific index
  const addCollegeAtIndex = (clg) => {
  //   // Check if the college is already in the compareArray
  //   const isAlreadyAdded = compareArray.some((college) => college._id === clg._id);

  //  // If the college is already in the array, remove it; otherwise, add it
  //  if (isAlreadyAdded) {
  //   const updatedCompareArray = compareArray.filter(college => college._id !== clg._id);
  //   setCompareArray(updatedCompareArray);
  // }

    const updatedCompareArray = [...compareArray];
    updatedCompareArray[clgIndex] = clg;
    setCompareArray(updatedCompareArray);
  };


  const getCompareClgList = ()=>{
    console.log('compareArray aaaaaaaaaaaaaaaaaaaaa',compareArray);
    let value = []
    compareArray?.forEach(clg=>value=[...value,clg?._id])


    console.log('valuesssssssssssss',value);
    if(compareArray.length>0){

      dispatch(getWebCompareCollegeList(value))
    }

    // Navigate to '/compare' only if there are at least 2 colleges
    setCompareButtonClicked(true);
    navigate('/compare');
    setIsOpen(false); //Close the modal

  }
  
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      appElement={document.getElementById("root")} // Set the app element here
      className={{
      base: "modal-base",
      afterOpen: "modal-base_after-open",
      beforeClose: "modal-base_before-close",
      }}
      overlayClassName={{
      base: "overlay-base",
      afterOpen: "overlay-base_after-open",
      beforeClose: "overlay-base_before-close"
      }}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={2000}
    >
      <div className="compare-modal-content">
        <div className="compare-modal-top">
          <p>Choose College</p>
        </div>
        <form className="compare-modal-search">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
            className="search-input"
            placeholder="&#128269; Search College..."
          />
        </form>
        <div className="compare-modal-bottom">
          <div className="bottom-colleges">
            <div className="row">
              {
                displayedColleges?.length>0 &&
                searchQuery
                ?
                displayedColleges.filter(clg => clg?.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map(clg =>
                  <div key={clg?._id} className={`column ${compareArray.some(college => college?._id === clg?._id) ? 'selected' : ''}`}
                  onClick={() => toggleClgAdd(clg)}>
                    <div className="circle"><i className="fa-solid fa-check fa-2xl"></i></div>
                    <div className="logo">
                    <img src={`${import.meta.env.VITE_BASE_URL}/${clg?.logo}`} alt="logo" />
                    </div>
                    <div className="details">
                      <div className="d-top">{clg?.name.length > 35 ? clg?.name.substring(0, 35) + '...' : clg?.name}</div>
                      <div className="d-middle"><i className="fa-solid fa-location-dot" ></i>{clg?.property_district}, {clg?.property_state}</div>
                      <div className="d-bottom">
                        <div className="d-b-left">Bachelor of Science [B.Sc]...</div>
                        <div className="d-b-right">₹ 70000</div>
                      </div>
                    </div>
                  </div>
                )
                :
                displayedColleges?.slice(0, 6) // Show only the first six colleges
                .map(clg=>
                  <div className={`column ${compareArray.some(college => college?._id === clg?._id) ? 'selected' : ''}`}
                  onClick={() => toggleClgAdd(clg)}>
                    <div className="circle"><i className="fa-solid fa-check fa-2xl"></i></div>
                    <div className="logo">
                    <img src={`${import.meta.env.VITE_BASE_URL}/${clg?.logo}`} alt="logo" />
                    </div>
                    <div className="details">
                      <div className="d-top">{clg?.name.length > 35 ? clg?.name.substring(0, 35) + '...' : clg?.name}</div>
                      <div className="d-middle"><i className="fa-solid fa-location-dot" ></i>{clg?.property_district}, {clg?.property_state}</div>
                      <div className="d-bottom">
                        <div className="d-b-left">Bachelor of Science [B.Sc]...</div>
                        <div className="d-b-right">₹ 70000</div>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
          <div className="bottom-buttons">
            <button className='btn-close' onClick={()=>onRequestClose()}>close</button>
            <button
              className="btn-compare"
              onClick={() => {
                if (compareArray.length >= 1) {
                  getCompareClgList()
                }
              }}
            >
              Compare
            </button>          
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default modal
