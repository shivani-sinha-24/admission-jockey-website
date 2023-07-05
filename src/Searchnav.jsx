import React from 'react'

function Searchnav() {
  return (
    <>
    <div className='section10'>

        <div className='ajlogo'>
            <img src="https://admissionjockey.com/assets/images/admission-jockey-logo1-main.png" alt="" />
        </div>

        <div className='searchform'>

            <form action="">
            <input type="text" placeholder='College name' />
           <button><i className="fa-solid fa-magnifying-glass"></i></button>


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