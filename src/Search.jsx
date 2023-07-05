import React from 'react'
import Searchnav from './Searchnav'
import Searchupnav from './Searchupnav'
import Subbar from './Subbar'
import Touch from './Touch'
import Footer from './Footer'

function Search() {
  return (
    <div>
         <Searchupnav/>
        <Searchnav/>
        <Subbar/>
        <Touch/>
        <Footer/>

    </div>
  )
}

export default Search