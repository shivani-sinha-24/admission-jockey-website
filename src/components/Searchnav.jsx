import React from 'react'
import { Link } from 'react-router-dom';

function Searchnav({search,setSearch,setState,setCity,setType, handleSearchClick}) {
  
  const clearPrevFilter = ()=>{
    setCity([]); setState([]); setType([]);
  }
  return (
    <>
    <div className='section10'>

        <div className='ajlogo'>
          <Link to={'/'}>
            <img src="https://admissionjockey.com/assets/images/admission-jockey-logo1-main.png" alt="" />
          </Link>
        </div>

        <div className='searchform'>

            <form action=""onSubmit={e=>{e.preventDefault();handleSearchClick()}}>
              <input type="text" placeholder='College name' name='search' value={search} onChange={e=>{setSearch(e.target.value);}}/>
              <button onClick={e=>handleSearchClick()}><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>

           
     


        </div>

        <div className='loginbtn'>
                <button>Log in</button>
            </div>

    </div>
    </>
  )
}

export default Searchnav