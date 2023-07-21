import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from "react-redux";
import img from "./assets/bagaloe.jpg"
import img1 from "./assets/dehradun.jpg"
import img2 from "./assets/delhi.jpg"
import img3 from "./assets/hyd.jpg"
import logo1 from "./assets/images/UPESLOGO.jpeg"
import logo2 from "./assets/images/Woxenlogo.jpeg"
import logo3 from "./assets/images/graphiceralogo.png"
import logo4 from "./assets/images/utranchellogo.jpeg"
import.meta.env.VITE_BASE_URL
import logo5 from "./assets/images/graphiceralogo.png"
import { getCollegeList } from "../redux/Action/PropertyAction";


function Slider4() {
    const dispatch = useDispatch();
    const [collegeRows, setCollegeRows] = useState();
    const [collegeLogoRows, setCollegeLogoRows] = useState();
    const getCollegeRow = async () => {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/collegeRows`).then((response) => response.json());
        setCollegeRows(response);
    };
    const getCollegeLogoRow = async () => {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/collegeLogoRows`).then((response) => response.json());
        setCollegeLogoRows(response);
    };
    const { college } = useSelector(state => ({
        college: state?.property?.property?.colleges?.filter(item => item.edu_type !== "University"),
    }));
    useEffect(() => {
        getCollegeRow();
        getCollegeLogoRow();
        dispatch(getCollegeList());
    }, [])
    return (
        <div className='section8'>
            {/* <h1 className='upartner'> Our Top online University Partners</h1> */}
            <div className="upartner">Our Top online College Partners</div>
            <div className='partners'>
                {collegeLogoRows?.firstRowUni?.length > 0 && collegeLogoRows?.secondRowUni?.length == 0 && collegeLogoRows?.thirdRowUni?.length == 0 ?
                    <Carousel infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay={true}>
                        <div className='uni'>
                            {collegeLogoRows?.firstRowUni?.map((clg) => {
                                return <img src={`${import.meta.env.VITE_BASE_URL}/${clg?.logo}`} />
                            })}
                        </div>
                    </Carousel> :""}
                {collegeLogoRows?.firstRowUni?.length > 0 && collegeLogoRows?.secondRowUni?.length > 0 && collegeLogoRows?.thirdRowUni?.length == 0 ?
                    <Carousel infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay={true}>
                        <div className='uni'>
                            {collegeLogoRows?.firstRowUni?.map((clg) => {
                                return <img src={`${import.meta.env.VITE_BASE_URL}/${clg?.logo}`} />
                            })}
                        </div>
                        <div className='uni'>
                            {collegeLogoRows?.secondRowUni?.map((clg) => {
                                return <img src={`${import.meta.env.VITE_BASE_URL}/${clg?.logo}`} />
                            })}
                        </div>
                    </Carousel> : ""}
                {collegeLogoRows?.firstRowUni?.length > 0 && collegeLogoRows?.secondRowUni?.length > 0 && collegeLogoRows?.thirdRowUni?.length > 0 ?
                    <Carousel infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay={true}>
                        <div className='uni'>
                            {collegeLogoRows?.firstRowUni?.map((clg) => {
                                return <img src={`${import.meta.env.VITE_BASE_URL}/${clg?.logo}`} />
                            })}
                        </div>
                        <div className='uni'>
                            {collegeLogoRows?.secondRowUni?.map((clg) => {
                                return <img src={`${import.meta.env.VITE_BASE_URL}/${clg?.logo}`} />
                            })}
                        </div>
                        <div className='uni'>
                            {collegeLogoRows?.thirdRowUni?.map((clg) => {
                                return <img src={`${import.meta.env.VITE_BASE_URL}/${clg?.logo}`} />
                            })}
                        </div>
                    </Carousel> : ""}
            </div>

            <div className='featured'>
                <div className="upartner">Featured Online College</div>
                <div className='ftuni'>
                {collegeRows?.firstRowUni?.length > 0 && collegeRows?.secondRowUni?.length == 0 && collegeRows?.thirdRowUni?.length == 0 ?
                            <Carousel infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay={true} showArrows={false} >
                                <div className='card2'>
                                    {collegeRows?.firstRowUni?.length > 0 ? collegeRows?.firstRowUni?.map((fItem) => {
                                        return (
                                            <div className='card21'>
                                                <div className='card211'>
                                                    <img src={`${import.meta.env.VITE_BASE_URL}/${fItem?.image}`} alt="" />
                                                </div>
                                                <div className='card22'>
                                                    <div className='card221'>
                                                        <img src={`${import.meta.env.VITE_BASE_URL}/${fItem?.logo}`} alt="" />
                                                    </div>
                                                    {/* <div className="card221" style={{ backgroundImage: `url(${logo1})`, width: '40%', height: '100%',zIndex:'900', backgroundSize: '100% 100%', backgroundRepeat:'no-repeat' }}></div> */}
                                                    <div className="card222">
                                                        <h4>{fItem?.name}</h4>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className='card23'>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, dicta.</p>
                                                    <button>View details</button>
                                                </div>
                                            </div>
                                        )
                                    }) : ""}
                                </div>
                            </Carousel> : ""}
                        {collegeRows?.firstRowUni?.length > 0 && collegeRows?.secondRowUni?.length > 0 && collegeRows?.thirdRowUni?.length == 0 ?
                            <Carousel infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay={true} showArrows={false} >
                                <div className='card2'>
                                    {collegeRows?.firstRowUni?.length > 0 ? collegeRows?.firstRowUni?.map((fItem) => {
                                        return (
                                            <div className='card21'>
                                                <div className='card211'>
                                                    <img src={`${import.meta.env.VITE_BASE_URL}/${fItem?.image}`} alt="" />
                                                </div>
                                                <div className='card22'>
                                                    <div className='card221'>
                                                        <img src={`${import.meta.env.VITE_BASE_URL}/${fItem?.logo}`} alt="" />
                                                    </div>
                                                    {/* <div className="card221" style={{ backgroundImage: `url(${logo1})`, width: '40%', height: '100%',zIndex:'900', backgroundSize: '100% 100%', backgroundRepeat:'no-repeat' }}></div> */}
                                                    <div className="card222">
                                                        <h4>{fItem?.name}</h4>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className='card23'>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, dicta.</p>
                                                    <button>View details</button>
                                                </div>
                                            </div>
                                        )
                                    }) : ""}
                                </div>
                                <div className='card2'>
                                    {collegeRows?.secondRowUni?.length > 0 ? collegeRows?.secondRowUni?.map((fItem) => {
                                        return (
                                            <div className='card21'>
                                                <div className='card211'>
                                                    <img src={`${import.meta.env.VITE_BASE_URL}/${fItem?.image}`} alt="" />
                                                </div>
                                                <div className='card22'>
                                                    <div className='card221'>
                                                        <img src={`${import.meta.env.VITE_BASE_URL}/${fItem?.logo}`} alt="" />
                                                    </div>
                                                    {/* <div className="card221" style={{ backgroundImage: `url(${logo1})`, width: '40%', height: '100%',zIndex:'900', backgroundSize: '100% 100%', backgroundRepeat:'no-repeat' }}></div> */}
                                                    <div className="card222">
                                                        <h4>{fItem?.name}</h4>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className='card23'>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, dicta.</p>
                                                    <button>View details</button>
                                                </div>
                                            </div>
                                        )
                                    }) : ""}
                                </div>
                            </Carousel> : ""}
                        {collegeRows?.firstRowUni?.length > 0 && collegeRows?.secondRowUni?.length > 0 && collegeRows?.thirdRowUni?.length > 0 ?
                            <Carousel infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay={true} showArrows={false} >
                                <div className='card2'>
                                    {collegeRows?.firstRowUni?.length > 0 ? collegeRows?.firstRowUni?.map((fItem) => {
                                        return (
                                            <div className='card21'>
                                                <div className='card211'>
                                                    <img src={`${import.meta.env.VITE_BASE_URL}/${fItem?.image}`} alt="" />
                                                </div>
                                                <div className='card22'>
                                                    <div className='card221'>
                                                        <img src={`${import.meta.env.VITE_BASE_URL}/${fItem?.logo}`} alt="" />
                                                    </div>
                                                    {/* <div className="card221" style={{ backgroundImage: `url(${logo1})`, width: '40%', height: '100%',zIndex:'900', backgroundSize: '100% 100%', backgroundRepeat:'no-repeat' }}></div> */}
                                                    <div className="card222">
                                                        <h4>{fItem?.name}</h4>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className='card23'>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, dicta.</p>
                                                    <button>View details</button>
                                                </div>
                                            </div>
                                        )
                                    }) : ""}
                                </div>
                                <div className='card2'>
                                    {collegeRows?.secondRowUni?.length > 0 ? collegeRows?.secondRowUni?.map((fItem) => {
                                        return (
                                            <div className='card21'>
                                                <div className='card211'>
                                                    <img src={`${import.meta.env.VITE_BASE_URL}/${fItem?.image}`} alt="" />
                                                </div>
                                                <div className='card22'>
                                                    <div className='card221'>
                                                        <img src={`${import.meta.env.VITE_BASE_URL}/${fItem?.logo}`} alt="" />
                                                    </div>
                                                    {/* <div className="card221" style={{ backgroundImage: `url(${logo1})`, width: '40%', height: '100%',zIndex:'900', backgroundSize: '100% 100%', backgroundRepeat:'no-repeat' }}></div> */}
                                                    <div className="card222">
                                                        <h4>{fItem?.name}</h4>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className='card23'>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, dicta.</p>
                                                    <button>View details</button>
                                                </div>
                                            </div>
                                        )
                                    }) : ""}
                                </div>
                                <div className='card2'>
                                    {collegeRows?.thirdRowUni?.length > 0 ? collegeRows?.thirdRowUni?.map((fItem) => {
                                        return (
                                            <div className='card21'>
                                                <div className='card211'>
                                                    <img src={`${import.meta.env.VITE_BASE_URL}/${fItem?.image}`} alt="" />
                                                </div>
                                                <div className='card22'>
                                                    <div className='card221'>
                                                        <img src={`${import.meta.env.VITE_BASE_URL}/${fItem?.logo}`} alt="" />
                                                    </div>
                                                    {/* <div className="card221" style={{ backgroundImage: `url(${logo1})`, width: '40%', height: '100%',zIndex:'900', backgroundSize: '100% 100%', backgroundRepeat:'no-repeat' }}></div> */}
                                                    <div className="card222">
                                                        <h4>{fItem?.name}</h4>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className='card23'>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, dicta.</p>
                                                    <button>View details</button>
                                                </div>
                                            </div>
                                        )
                                    }) : ""}
                                </div>
                            </Carousel> : ""}

                </div>




            </div>

            <div >

                <button className='vm'>view more</button>
            </div>
        </div>
    )
}

export default Slider4