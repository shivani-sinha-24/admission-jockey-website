import React from 'react'

function Touch() {
  return (
<>
    <div className='lower'>
    <div className='lower2'>
    <button>Next page <i class="fa-solid fa-arrow-right"></i> </button>
    </div>
    

    <div className='lower1'>
    <span>page</span>
    <button>1</button>
    <span>of 200</span>
    </div>
    
</div>

    <div className='touch'>
        <h3>Get in touch with our Experts</h3>
        <h2>expert Counsellors</h2>
        <form action="">
            <input type="text" placeholder='Name' />
            <input type="text"  placeholder='Mobile'/>
            <input type="text" placeholder='Email' /> <br />
            <button>Request for a callback</button>
        </form>
    </div>
    </>
  )
}

export default Touch