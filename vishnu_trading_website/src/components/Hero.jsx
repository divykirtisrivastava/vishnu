import React from 'react'
import { RiDoubleQuotesL,RiDoubleQuotesR } from "react-icons/ri";
import tradImage from '../assets/traid_image.png'
import { FaCircleCheck } from "react-icons/fa6";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bgImage from '../assets/bg30.jpg'; // Adjust path as needed
import mapimage1 from '../assets/mpa1.png'
import bg from '../assets/bg32.jpg'
import mapimage2 from '../assets/home.png'
import mapimage3 from '../assets/map3.png'
import mapimage4 from '../assets/map4.png'
import mapimage5 from '../assets/map5.png'
import mapimage6 from '../assets/map6.png'
import futureimage1 from '../assets/feature-1.png'
import futureimage2 from '../assets/feature-2.png'
import futureimage3 from '../assets/feature-3.png'
import futureimage4 from '../assets/feature-4.png'
import futureimage5 from '../assets/feature-5.png'
import futureimage6 from '../assets/feature-6.png'
import traid from '../assets/traid.jpg'
import blogimage1 from '../assets/blog1.jpg'
import rocket from '../assets/rocket.gif'



export default function Hero() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    {/* ///////////////////// Banner Section Start///////////////////////////////////////// */}
    <div
      className=' bg-cover bg-center p-10 md:p-20 flex flex-col md:flex-row items-center justify-center'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='md:w-[50%] w-full mb-8 md:mb-0 mt-9'>
        <h1 className='text-[32px] md:text-[56px] text-white customeFontFamily leading-tight'>
          Invest in Forex, Crypto and Commodity market way to trade
        </h1>
        <p className='text-white text-[16px] md:text-[18px] mt-4'>
          Welcome to [Trust Bot] your gateway to financial freedom through the exciting world of forex trading. At [Trust Bot] we believe that everyone has the potential to achieve financial success with the right guidance and resources. Our comprehensive programs and supportive community are designed to help you navigate the forex market with confidence and skill.
        </p>
        <div className='flex gap-3 mt-6'>
          <button className='btn btn-secondary px-4 uppercase'>Learn More</button>
          <button className='btn btn-secondary px-4 uppercase'>Contact Us</button>
        </div>
      </div>
      <div className='md:w-[50%] w-full ml-'>
        <img src={mapimage2} alt="Section 2 Image" className='w-full h-auto' />
      </div>
    </div>

    {/* //////////////////////////////// Banner Section End ////////////////////////////// */}

    {/* /////////////////////////////////// Welcome Section Start ///////////////////////////// */}
    <div className='welcome-main-container h-auto md:h-[350px] bg-gray-900'>
  <div className='welcome-boxcontainer h-auto md:h-[350px] relative p-5 md:p-0'>
    {/* <p className='company-text absolute top-1/2 transform -translate-y-1/2 -left-10 text-gray-500 text-sm md:text-base'>Company Name</p> */}
    <div className='welcome-text-container w-full text-center pt-10 md:pt-20 text-2xl md:text-3xl font-bold text-white flex flex-col items-center justify-center'>
      <h1 className='text-3xl md:text-4xl'>WELCOME TO <span className='text-[#6272F7]'>Trust Bot</span></h1>
      <p className='mt-5 md:mt-10 font-medium italic'>
        <RiDoubleQuotesL className='inline text-[40px] md:text-[50px] me-8 text-[#404040]' /> 
        We Believe & Live in Reality
        <RiDoubleQuotesR className='inline ms-8 md:text-[50px] text-[#404040]' />
      </p>
      <p className='w-full md:w-[65%] text-[14px] md:text-[16px] font-semibold mt-5 md:mt-10 leading-6 mx-auto'>
        We are happy to inform you that you all are not just our clients but also our business partners. Together we will make good profits in the global market. Join us at [Trust Bot] where we are committed to empowering the Forex and Commodity markets with cutting-edge solutions and unwavering dedication to our customers.
      </p>
    </div>
  </div>
</div>

    {/* /////////////////////////////////// Welcome Section End ///////////////////////////// */}

    {/* /////////////////////////////////// Work Parts Section Start ///////////////////////// */}
    <div className='workpart-container'>
  <div className='workpart-subcontainer text-center pt-20 text-3xl font-bold text-white flex flex-col items-center justify-start relative'>
    {/* <p className='company-text absolute top-[50%] transform -translate-y-1/2 -right-20 text-gray-500'>Company Name</p> */}
    <h1 className='text-3xl md:text-4xl'>
      WHAT IS [Tust Bot] & <span className='text-[#6272F7]'>HOW IT WORKS?</span>
    </h1>
    <p className='mt-10 text-xl font-medium italic w-full md:w-[50%] mx-auto'>
      Join us at [Tust Bot] where we are committed to empowering the Forex and Commodity markets with cutting-edge solutions and unwavering dedication to our customers.
    </p>
    <div className='w-full flex flex-col md:flex-row items-center justify-center mt-16 px-5 md:px-20'>
      <div className='w-full md:w-[50%]'>
        <img src={tradImage} alt="" className='w-full h-auto' />
      </div>
      <div className='w-full md:w-[50%] md:pe-[50px] mt-5 md:mt-0'>
        <h1 className='text-3xl md:text-4xl text-left'>We’ve built this platform to deal in Forex and Commodity market.</h1>
        <p className='mt-3 text-lg font-medium text-left'>Welcome to [Tust Bot] where we power the Forex and Commodity market with innovative and reliable solutions for our customers. Our mission is to achieve mutual success with our clients in the global market, built on a foundation of Trust and Commitment.</p>
        <p className='mt-3 text-base font-medium text-left'>
          <FaCircleCheck className='inline me-3' /> We Believe & Live in Reality.
        </p>
        <p className='mt-3 text-base font-medium text-left'>
          <FaCircleCheck className='inline me-3' /> Providing help for your transactions with full support 24/7.
        </p>
      </div>
    </div>
  </div>
</div>

    {/* /////////////////////////////////// Work Parts Section End ///////////////////////// */}

    {/* //////////////////////////////////// Traid RoadMap Start ///////////////////////////////////*/}

    <div className='w-full bg-[#1f222b] pt-12 flex flex-col items-center pb-10'>
  <h1 className='text-4xl text-white text-center font-bold'>
    [Tust Bot] <span className='text-[#6272F7]'>Use these 6 point in roadmap section</span>
  </h1>
  <div className='w-full flex flex-col md:flex-row mt-20 px-5 md:px-20'>
    <div className='w-full md:w-1/2'>
      <div className='relative'>
        <div className='flex items-start gap-3 px-3 mapoutline'>
          <img src={mapimage1} alt="" width='60px' className='p-2 rounded-full mapimagebackground' />
          <div className='pt-3'>
            <h1 className='text-white text-3xl font-bold'>Technology and Infrastructure Setup
            </h1>
            <p className='text-[#888] mt-3'>
            Select reliable trading platforms with strong cybersecurity and data analytics tools to ensure efficient trade execution and protect investor information..
            </p>
          </div>
        </div>
      </div>
      <div className='relative mt-3'>
        <div className='flex items-start gap-3 px-3 mapoutline'>
          <img src={mapimage2} alt="" width='60px' className='p-2 rounded-full mapimagebackground' />
          <div className='pt-3'>
            <h1 className='text-white text-3xl font-bold'>Investing Program</h1>
            <p className='text-[#888]'>
            Sustainable Growth Through Innovation: To drive sustainable financial growth for our clients by harnessing the power of technology and data analytics to maximize investment opportunities.
            </p>
          </div>
        </div>
      </div>
      <div className='relative mt-3'>
        <div className='flex items-start gap-3 px-3'>
          <img src={mapimage3} alt="" width='60px' className='p-2 rounded-full mapimagebackground' />
          <div className='pt-3'>
            <h1 className='text-white text-3xl font-bold'>Investing Program</h1>
            <p className='text-[#888] mt-1'>
            Leading the Crypto Revolution: To be at the forefront of the cryptocurrency revolution, empowering investors to capitalize on cutting-edge blockchain technologies and digital assets..
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className='w-full md:w-1/2'>
      <div className='relative'>
        <div className='flex items-start gap-3 px-3 mapoutline'>
          <img src={mapimage4} alt="" width='60px' className='p-2 rounded-full mapimagebackground' />
          <div className='pt-3'>
            <h1 className='text-white text-3xl font-bold'>Investing Program</h1>
            <p className='text-[#888]'>
            Revolutionizing Trading Strategies: To revolutionize trading strategies by integrating advanced analytics and AI technology, empowering investors to capitalize on market opportunities.
            </p>
          </div>
        </div>
      </div>
      <div className='relative mt-3'>
        <div className='flex items-start gap-3 px-3 mapoutline'>
          <img src={mapimage5} alt="" width='60px' className='p-2 rounded-full mapimagebackground' />
          <div className='pt-3'>
            <h1 className='text-white text-3xl font-bold'>Long-Term Strategy and Growth
            </h1>
            <p className='text-[#888] mt-4'>
            Foster loyalty and trust by maintaining strong investor relationships through regular communication while continuously adapting strategies to evolving market trends.
            </p>
          </div>
        </div>
      </div>
      <div className='relative mt-3'>
        <div className='flex items-start gap-3 px-3'>
          <img src={mapimage6} alt="" width='60px' className='p-2 rounded-full mapimagebackground' />
          <div className='pt-3'>
            <h1 className='text-white text-3xl font-bold'>Scaling Operations
            </h1>
            <p className='text-[#888] mt-4'>
            As your investor base grows, enhance service quality by expanding your team and diversifying offerings into new asset classes and markets.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    {/* //////////////////////////////////// Traid RoadMap End /////////////////////////////////////*/}


    {/* /////////////////////////////////////[Company Name] BEST FEATURES Section Start//////////////////////////////// */}
    <div className='w-full h-auto bg-black px-[80px] pb-14'>
    <div className='pt-10'>
        <h1 className='text-4xl text-white text-center font-bold'>[Trust Bot] <span className='text-[#6272F7]'>BEST FEATURES</span></h1>
        <p className='text-white text-[18px] text-center'>[Trust Bot] provides a Safe & Secure, Better Bonus, and Easy to access platform for customers.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        <div className="col">
            <div className="card h-100 cardbackgroundcontainer">
                <div className="card-body cardbackground p-5 flex flex-col justify-center items-center text-white">
                    <img src={futureimage1} alt="" width='60px' className='cardimagebackground p-3' />
                    <h5 className="card-title text-2xl font-bold">Effortless & convenient
                    </h5>
                    <p className="card-text text-center"> Flexible withdrawals 24/7   <br />working  days.</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100 cardbackgroundcontainer">
                <div className="card-body cardbackground p-5 flex flex-col justify-center items-center text-white">
                    <img src={futureimage2} alt="" width='60px' className='cardimagebackground p-3' />
                    <h5 className="card-title text-3xl font-bold text-center">Return On Investment</h5>
                    <p className="card-text text-center">Bot service Get upto 22-30% every month.</p>
                </div>
            </div>
        </div> 
        <div className="col">
            <div className="card h-100 cardbackgroundcontainer">
                <div className="card-body cardbackground p-5 flex flex-col justify-center items-center text-white">
                    <img src={futureimage3} alt="" width='60px' className='cardimagebackground p-3' />
                    <h5 className="card-title text-3xl font-bold">Invest your way
                    </h5>
                    <p className="card-text text-center">Easy investments
                    start <br /> in  at  ₹5000</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100 cardbackgroundcontainer">
                <div className="card-body cardbackground p-5 flex flex-col justify-center items-center text-white">
                    <img src={futureimage4} alt="" width='60px' className='cardimagebackground p-3' />
                    <h5 className="card-title text-3xl font-bold">Referral Income</h5>
                    <p className="card-text text-center">Referral commission Get instant Referral commisson upto 18%.</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100 cardbackgroundcontainer">
                <div className="card-body cardbackground p-5 flex flex-col justify-center items-center text-white">
                    <img src={futureimage5} alt="" width='60px' className='cardimagebackground p-3' />
                    <h5 className="card-title text-3xl font-bold">No extra charges
                    </h5>
                    <p className="card-text text-center">zero commission, <br />
                    zero withdrawal fees.</p>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card h-100 cardbackgroundcontainer">
                <div className="card-body cardbackground p-5 flex flex-col justify-center items-center text-white">
                    <img src={futureimage6} alt="" width='60px' className='cardimagebackground p-3' />
                    <h5 className="card-title text-3xl font-bold">Safe & secure</h5>
                    <p className="card-text text-center">Secured investments with
                    decentralized payment systemr.</p>
                </div>
            </div>
        </div>
    </div>
</div>

    {/* /////////////////////////////////////[Company Name] BEST FEATURES Section End//////////////////////////////// */}


    {/* /////////////////////////////////////BENEFITS FOREX & COMMODITY Section Start /////////////////////////// */}
    <div className='w-full h-auto bg-[#281F2F]'>
    <div className='w-full h-auto p-10 md:p-20'>
        <div className='flex flex-col items-center gap-9'>
            <h1 className='text-4xl text-white text-center font-bold'>BENEFITS FOREX & COMMODITY</h1>
            <p className='text-white text-[18px] text-center w-full md:w-[70%]'>
                A Forex & Commodity, Forex-currency or Forex is a digital currency designed to work as a medium of exchange through a decentralized network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it.
            </p>
        </div>
        <div className='flex justify-center mt-10'>
            <img src={traid} alt="Forex and Commodity Illustration" className='max-w-full h-auto' />
        </div>
    </div>
</div>


    {/* /////////////////////////////////////BENEFITS FOREX & COMMODITY Section End///////////////////////////// */}



    {/* /////////////////////////////////////Our Blog and News Section End///////////////////////////// */}

    {/* <div className='w-full h-auto relative'>
    <div className='w-full h-auto p-14 bg-[#090717]'>
        <div className='flex flex-col items-center gap-9'>
            <img src={rocket} alt="Rocket" className='absolute top-0 right-0 w-48' />
            <h1 className='text-4xl text-white text-center font-bold'>Our Blog and News</h1>
            <p className='text-white text-[18px] text-center w-full md:w-[70%]'>
                Our blog provides better information about investment, forex trading, and current market status.
            </p>
        </div>
        
        <div className="slider-container border">
            <Slider {...settings}>
                {Array(8).fill().map((_, index) => (
                    <div key={index}>
                        <div className="col">
                            <div className="card">
                                <img src={blogimage1} className="card-img-top" alt="Blog post" />
                                <div className="card-body bg-[#090717] text-white text-center">
                                    <h5 className="card-title text-2xl">Card title</h5>
                                    <h5 className="card-title">Monday, 2024 | By John Don</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
</div> */}


    {/* /////////////////////////////////////Our Blog and News Section End///////////////////////////// */}
    </>
  )
}
