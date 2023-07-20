import React from 'react'

function Touch() {
  return (
  <>
    
    <div className='touch'>
      <div className="touch-top">
        <p>Get in touch with our</p>
        <p>expert Counsellors</p>
      </div>
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