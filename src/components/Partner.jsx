import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from 'react-responsive-carousel';
import img from "../assets/bagaloe.jpg"
import img1 from "../assets/dehradun.jpg"
import img2 from "../assets/delhi.jpg"
import.meta.env.VITE_BASE_URL
import img3 from "../assets/hyd.jpg"
import logo1 from "../assets/images/UPESLOGO.jpeg"
import logo2 from "../assets/images/Woxenlogo.jpeg"
import logo3 from "../assets/images/graphiceralogo.png"
// import logo5 from "./assets/images/graphiceralogo.png"
import { getCollegeList } from "../../redux/Action/PropertyAction";
import logo5 from '../assets/images/graphiceralogo.png'
import logo4 from "../assets/images/utranchellogo.jpeg"

function Partner({isOpen,setIsOpen}) {

    const dispatch = useDispatch();
    const [universityRows, setUniversityRows] = useState();
    const [universityLogoRows, setUniversityLogoRows] = useState();

    // Function to collect data
    const getUniversityRow = async () => {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/universityRows`).then((response) => response.json());
        setUniversityRows(response);
    };
    const getUniversityLogoRow = async () => {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/universityLogoRows`).then((response) => response.json());
        setUniversityLogoRows(response);
    };
    const { college } = useSelector(state => ({
        college: state?.property?.property?.colleges?.filter(item => item.edu_type == "University")
    }));
    useEffect(() => {
        getUniversityRow();
        getUniversityLogoRow();
        dispatch(getCollegeList());
    }, []);
    let setCountForCarousel = () => {
        console.log(college?.length);
    }
    return (
        <>
            <section className='section6'>

                <div className='advice'>
                    <h1>Get advice from our experts </h1>
                    <button onClick={()=>setIsOpen(true)}>Click here</button>
                </div>

                {/* <h1 className='upartner'> Our Top University Partners</h1> */}
                <div className="upartner">Our Top University Partners</div>

                <div className='partners'>
                    {universityLogoRows?.firstRowUni?.length > 0 && universityLogoRows?.secondRowUni?.length == 0 && universityLogoRows?.thirdRowUni?.length == 0 ?
                        <Carousel infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay={true}>
                            <div className='uni'>
                                {universityLogoRows?.firstRowUni?.map((clg) => {
                                    return <img src={`${import.meta.env.VITE_BASE_URL}/${clg?.logo}`} />
                                })}
                            </div>
                        </Carousel> : ""}
                    {universityLogoRows?.firstRowUni?.length > 0 && universityLogoRows?.secondRowUni?.length > 0 && universityLogoRows?.thirdRowUni?.length == 0 ?
                        <Carousel infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay={true}>
                            <div className='uni'>
                                {universityLogoRows?.firstRowUni?.map((clg) => {
                                    return <img src={`${import.meta.env.VITE_BASE_URL}/${clg?.logo}`} />
                                })}
                            </div>
                            <div className='uni'>
                                {universityLogoRows?.secondRowUni?.map((clg) => {
                                    return <img src={`${import.meta.env.VITE_BASE_URL}/${clg?.logo}`} />
                                })}
                            </div>
                        </Carousel> : ""}
                    {universityLogoRows?.firstRowUni?.length > 0 && universityLogoRows?.secondRowUni?.length > 0 && universityLogoRows?.thirdRowUni?.length > 0 ?
                        <Carousel infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay={true}>
                            <div className='uni'>
                                {universityLogoRows?.firstRowUni?.map((clg) => {
                                    return <img src={`${import.meta.env.VITE_BASE_URL}/${clg?.logo}`} />
                                })}
                            </div>
                            <div className='uni'>
                                {universityLogoRows?.secondRowUni?.map((clg) => {
                                    return <img src={`${import.meta.env.VITE_BASE_URL}/${clg?.logo}`} />
                                })}
                            </div>
                            <div className='uni'>
                                {universityLogoRows?.thirdRowUni?.map((clg) => {
                                    return <img src={`${import.meta.env.VITE_BASE_URL}/${clg?.logo}`} />
                                })}
                            </div>
                        </Carousel> : ""}
                </div>

                <div className='featured'>
                    {/* <h2>Featured Universities</h2> */}
                    <div className="upartner">Featured Universities</div>
                    <div className='ftuni'>
                        {universityRows?.firstRowUni?.length > 0 && universityRows?.secondRowUni?.length == 0 && universityRows?.thirdRowUni?.length == 0 ?
                            <Carousel infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay={true} showArrows={false} >
                                <div className='card2'>
                                    {universityRows?.firstRowUni?.length > 0 ? universityRows?.firstRowUni?.map((fItem) => {
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
                        {universityRows?.firstRowUni?.length > 0 && universityRows?.secondRowUni?.length > 0 && universityRows?.thirdRowUni?.length == 0 ?
                            <Carousel infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay={true} showArrows={false} >
                                <div className='card2'>
                                    {universityRows?.firstRowUni?.length > 0 ? universityRows?.firstRowUni?.map((fItem) => {
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
                                    {universityRows?.secondRowUni?.length > 0 ? universityRows?.secondRowUni?.map((fItem) => {
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
                        {universityRows?.firstRowUni?.length > 0 && universityRows?.secondRowUni?.length > 0 && universityRows?.thirdRowUni?.length > 0 ?
                            <Carousel infiniteLoop={true} showStatus={false} showThumbs={false} autoPlay={true} showArrows={false} >
                                <div className='card2'>
                                    {universityRows?.firstRowUni?.length > 0 ? universityRows?.firstRowUni?.map((fItem) => {
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
                                    {universityRows?.secondRowUni?.length > 0 ? universityRows?.secondRowUni?.map((fItem) => {
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
                                    {universityRows?.thirdRowUni?.length > 0 ? universityRows?.thirdRowUni?.map((fItem) => {
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



            </section>
        </>
    )
}

export default Partner