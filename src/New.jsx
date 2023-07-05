import React from 'react'
import axios from 'axios'

function New() {

  const token = sessionStorage.getItem("token")
  console.log(token)

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

    axios.get(`${import.meta.env.VITE_BASE_URL}/getUniversityCourse` , config ).then((res)=>{
        console.log(res)
   }).catch(()=>{
    console.log("error aa gyii")
   })
  return (
    <div>New</div>
  )
}

export default New