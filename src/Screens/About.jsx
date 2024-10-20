import React from 'react'
import curveImg from "../assests/curveImg.png"
import HomeLayout from '../Layout/HomeLayout'
import { IconButton } from '@mui/material'
import { ArrowDownward } from '@material-ui/icons'
import imarahulkota from '../assests/images/iamrahulkota.jpg'
import CustomButton from '../Components/CustomComponents/CustomButton'
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom'

function About() {
  const nagative = useNavigate();

  const myStoryData = [
    {
        status : "About me",
        title : "UI Designer based in Gurugram, India",
        description : "Nirmit Pahwa is a creative UX Designer based in Delhi NCR who, being a Figma Xpert, specializes in app design and web design. He has years of experience under his belt, and has the unique skillset needed to craft stunning interfaces that captures each companys brand identity.",
        description2 : "Nirmit Pahwa is a creative UX Designer based in Delhi NCR who, being a Figma Xpert, specializes in app design and web design. He has years of experience under his belt, and has the unique skillset needed to craft stunning interfaces that captures each companys brand identity."
    },
    {
      status : "my timeline",
      title : "Over 3 years as a creative designer",
      description : "Nirmit Pahwa is a creative UX Designer based in Delhi NCR who, being a Figma Xpert, specializes in app design and web design. He has years of experience under his belt, and has the unique skillset needed to craft stunning interfaces that captures each companys brand identity.",
      description2 : "Nirmit Pahwa is a creative UX Designer based in Delhi NCR who, being a Figma Xpert, specializes in app design and web design. He has years of experience under his belt, and has the unique skillset needed to craft stunning interfaces that captures each companys brand identity."
    },
    {
      status : "About me",
      title : "UI Designer based in Gurugram, India",
      description : "Nirmit Pahwa is a creative UX Designer based in Delhi NCR who, being a Figma Xpert, specializes in app design and web design. He has years of experience under his belt, and has the unique skillset needed to craft stunning interfaces that captures each companys brand identity.",
      description2 : "Nirmit Pahwa is a creative UX Designer based in Delhi NCR who, being a Figma Xpert, specializes in app design and web design. He has years of experience under his belt, and has the unique skillset needed to craft stunning interfaces that captures each companys brand identity."
    },
  ]

  const handleScheduleCall = () => {
    console.log("Clicked handleScheduleCall")
  }

  const handleProjectAll = () => {
    nagative(`/projects`)
  }


  return (

    <HomeLayout>
        <>
          <div className='relative text-white h-[64vh] flex flex-col justify-end'>
            <Marquee 
              speed={150} 
              gradient={false} 
              className='font-bigRiverRegular text-focus-title md:text-focus-title-md lg:text-focus-title-lg'>
            ABOUT ME </Marquee>
            <div className='  flex justify-end right-48 absolute'>
              <img src={imarahulkota} alt='@iamrahulkota-image' width="278px" height="393px" className='rounded-2xl -rotate-2 relative z-10 hidden md:block'/>
            </div>
          </div>

          
          <div className='px-2 md:px-6 lg:px-12'>

            <div className='py-0 md:py-4 lg:py-12'>
              <CustomButton buttonText="View my projects" buttonOnClick={handleProjectAll} /> 
            </div>

            <div className='flex justify-center md:justify-end'>
              <img src={curveImg} alt='curveImg' width="397px" height="41px" className='' />
              {/* <IconButton aria-label="arrow">
                <ArrowDownward className='text-white'/>
              </IconButton> */}
            </div>

            <div className='bg-white text-black rounded-2xl px-2 md:px-6 lg:px-12 py-12 lg:py-24 '>
              <div className='text-center'>
                <h1 className='uppercase font-bigRiverRegular text-title md:text-title-md lg:text-title-lg'>MY STORY</h1>
              </div>
              <div className='flex justify-center '>
                <img src={imarahulkota} alt="@imarahulkota-image" className='block lg:hidden rounded-2xl -rotate-2 w-40 md:w-80 h-full' />
              </div>
              <div className='flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24'>
                {myStoryData.map((item, index) => (
                  <div key={index} className='w-100 md:w-2/6 p-4 md:p-12'>
                    <span className='uppercase font-satoshiRegular text-xs'>{item?.status}</span>
                    <h3 className='text-4xl py-10 md:py-12 font-satoshiRegular'>{item?.title}</h3>
                    <p className='text-base pb-6 font-satoshiRegular'>{item?.description}</p>
                    <p className='text-base pb-6 font-satoshiRegular'>{item?.description2}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex flex-col justify-center items-center mx-auto h-[500px]'>
                <div className='bg-black px-10 py-8 w-[360px] md:w-[480px] flex flex-col justify-center items-center rounded-2xl'>
                  <p className='font-satoshiRegular text-white text-center text-lg md:text-2xl mb-5'>Whether you need design or tweak some code, I have the skills and creativity needed to take your project to the next level.</p>
                  <CustomButton buttonText="SCHEDULE A CALL" buttonOnClick={handleScheduleCall}/>
                </div>
            </div>

          </div>
        </>

    </HomeLayout>
  )
}

export default About