import React from 'react'
import Searchnav from '../../components/Searchnav'
import Searchupnav from '../../components/Searchupnav'
import Subbar from '../../components/Subbar'
import Touch from '../../components/Touch'
import Footer from '../../components/Footer'
import './Search.css'

function Search() {
  return (
    <div className='search-page'>
        <Searchupnav/>
        <Searchnav/>
        <Subbar/>
        <Touch/>
        <Footer/>

    </div>
  )
}

export default Search