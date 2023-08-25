import React from 'react'
import './CompFoote.css'

const CompFoote = () => {
  return (
    <div className='compare-footer'>
      <div className="row">
        <div className="column">
          <p></p>
        </div>
      </div>
      <div className="hghlight-link">
        <div className="links">
          <p className='link-heading'>Course</p>
          <div className='link-container'>
            <div>MCA</div>
            <div>BCA</div>
            <div>MD</div>
            <div>MBBS</div>
            <div>MS</div>
            <div>B.PHARMA</div>
          </div>
          <p className='link-heading'>College</p>
          <div className='link-container'>
            <div>TOP DRCC COLLEGE </div>
            <div>TOP COLLEGE IN DEHRADUN</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="bottom-left">
          <div className="left-item">
            <div className="heading">Course</div>
            <div className="item">MCA</div>
            <div className="item">BCA</div>
            <div className="item">MD</div>
            <div className="item">MBBS</div>
            <div className="item">MS</div>
            <div className="item">B.PHARMA</div>
          </div>
          <div className="left-item">
            <div className="heading">College</div>
            <div className="item">TOP DRCC COLLEGE</div>
            <div className="item">TOP COLLEGE IN</div>
            <div className="item">DEHRADUN</div>
          </div>
          <div className="left-item">
            <div className="heading">Top Exams</div>
            <div className="item">CAT</div>
            <div className="item">JEE</div>
            <div className="item">GATE</div>
          </div>
          {/* <div className="left-item"></div> */}
        </div>
        <div className="bottom-right">
          <div className="heading">Corporate Office:</div>
          <div className="address">Meedo plaza, Rajpur Road, Dehradun, Uttarakhand 248001</div>
          <div className="contact">
            <div className="phone">+91 7060243009, 9997740264</div>
            <div className="email">contact@admissionjockey.com</div>
          </div>
          <div className="platforms">
            <div className="p-logo">
            <i className="fa-brands fa-facebook"></i>
            </div>
            <div className="p-logo">
            <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="p-logo">
            <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="p-logo">
            <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <div className="p-logo">
            <i className="fa-brands fa-whatsapp"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom2">
        <div className="bottom-left2">
          <div>ABOUT US</div>
          <div>ABOUT US</div>
          <div>TERMS OF USE </div>
          <div>CONTACT</div>
        </div>
        <div className="bottom-right2">Copyright © 2021. Admission Jocke</div>
      </div>
    </div>
  )
}

export default CompFoote
