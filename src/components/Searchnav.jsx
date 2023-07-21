import React, { useState } from 'react'

function Searchnav() {
  const [search,setSearch] = useState('');
  
  console.log(search);
  return (
    <>
    <div className='section10'>

        <div className='ajlogo'>
            <img src="https://admissionjockey.com/assets/images/admission-jockey-logo1-main.png" alt="" />
        </div>

        <div className='searchform'>

            <form action="">
              <input type="text" placeholder='College name' name='search' value={search} onChange={e=>setSearch(e.target.value)}/>
              <button onClick={e=>{e.preventDefault();}}><i className="fa-solid fa-magnifying-glass"></i></button>
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