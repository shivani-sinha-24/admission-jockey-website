import React, { useEffect, useState } from 'react'
import './DetailPage.css'
import Bar from '../../components/Bar';
import DetailNav from '../../components/DetailNav/DetailNav';
import DetailCollegeImg from '../../components/DetailCollegeImg/DetailCollegeImg';
import DetailMainContent from '../../components/DetailMainContent/DetailMainContent';
import DetailMembership from '../../components/DetailMembership/DetailMembership';
import DetailNavdropdown from '../../components/detailNavdropdown/DetailNavdropdown';

const DetailPage = () => {
  const [detailNavdropdown,setDetailNavDropdown] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setDetailNavDropdown(!window.innerWidth >= 1200);
    };

    // Initial check when the component mounts
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='detail-page'>
      <Bar/>
      <DetailNav 
        detailNavdropdown={detailNavdropdown} 
        setDetailNavDropdown={setDetailNavDropdown} 
      />
      {
        detailNavdropdown && <DetailNavdropdown/>
      }
      <DetailCollegeImg />
      <DetailMembership />
      <DetailMainContent />
    </div>
  );
};

export default DetailPage;
