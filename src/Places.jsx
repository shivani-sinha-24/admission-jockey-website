import React from 'react'

function Places() {
  return (
  <>
  <section className='section5'>
    {/* <h1>Top Study Places</h1> */}
    <div className="section5-h1">Top Study Places</div>

    <div className='study'>
        <div className='places1'>
            <div className='Banglore set1'>
                <h2>Bangalore</h2>
            </div>
            <div className='hyderbad set2'>
            <h2>Hyderbad</h2>
            </div>
            
        </div>
        <div className='places2'>
        <div className='Delhi set2'>
        <h2>Delhi-NCR</h2>
        </div>
            <div className='Dehradun set1'>
                <h2>Dehradun</h2>
            </div>
            
        </div>
        <div className='places3'>
           <div className='Kolkata set1'>
            <h2>Kolkata</h2>
           </div>
            <div className='Pune set2'>
                <h2>Pune</h2>
            </div>
          
        </div>
    </div>
  </section>
  
  </>)
}

export default Places