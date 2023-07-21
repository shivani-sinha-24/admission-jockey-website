import React, { useState } from 'react'
import './Home.css'
import Modal from '../../modal/Modal'
import Bar from '../../components/Bar'
import Nav from '../../components/Nav'
import Section1 from '../../components/Section1'
import Section2 from '../../components/Section2'
import Slider1 from '../../components/Slider1'
import Slider2 from '../../components/Slider2'
import Places from '../../components/Places'
import Partner from '../../components/Partner'
import Slider3 from '../../components/Slider3'
import Slider4 from '../../components/Slider4'
import Phone2 from '../../components/Phone2'
import Content from '../../components/Content'
import Lorem from '../../components/Lorem'
import Footer from '../../components/Footer'
import New from '../../components/New'

function Home() {
  
  const [isOpen, setIsOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  // function closeModal() {
  //   setIsOpen(false);
  // }
  const handleOpenModal = () => {
    setIsOpen(!isOpen)
  };
  return (
    <div className='home-page'>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={handleOpenModal}
        />
      )}
      <Bar/>
      <Nav/>
      <Section1/>
      <Section2/>
      <Slider1/>
      <Slider2/>
      <Places/>
      <Partner
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        />
      <Slider3
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        />
      <Slider4/>
      <Phone2/>
      <Content/>
      <Lorem/>
      <Footer/>
      {/* <New/> */}
    </div>
  )
}

export default Home