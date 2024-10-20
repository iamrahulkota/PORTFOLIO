import React from 'react'
import curveImg from "../assests/curveImg.png"
import HomeLayout from '../Layout/HomeLayout'
import { IconButton } from '@mui/material'
import { ArrowDownward } from '@material-ui/icons'


function About() {
  const myStoryData = [
    {
        status : "About me",
        title : "UI Designer based in Gurugram, India",
        description : "Nirmit Pahwa is a creative UX Designer based in Delhi NCR who, being a Figma Xpert, specializes in app design and web design. He has years of experience under his belt, and has the unique skillset needed to craft stunning interfaces that captures each companys brand identity. Nirmit Pahwa is a creative UX Designer based in Delhi NCR who, being a Figma Xpert, specializes in app design and web design. He has years of experience under his belt, and has the unique skillset needed to craft stunning interfaces that captures each companys brand identity."
    },
    {
      status : "my timeline",
      title : "Over 3 years as a creative designer",
      description : "Nirmit Pahwa is a creative UX Designer based in Delhi NCR who, being a Figma Xpert, specializes in app design and web design. He has years of experience under his belt, and has the unique skillset needed to craft stunning interfaces that captures each companys brand identity. Nirmit Pahwa is a creative UX Designer based in Delhi NCR who, being a Figma Xpert, specializes in app design and web design. He has years of experience under his belt, and has the unique skillset needed to craft stunning interfaces that captures each companys brand identity."
    },
    {
      status : "About me",
      title : "UI Designer based in Gurugram, India",
      description : "Nirmit Pahwa is a creative UX Designer based in Delhi NCR who, being a Figma Xpert, specializes in app design and web design. He has years of experience under his belt, and has the unique skillset needed to craft stunning interfaces that captures each companys brand identity. Nirmit Pahwa is a creative UX Designer based in Delhi NCR who, being a Figma Xpert, specializes in app design and web design. He has years of experience under his belt, and has the unique skillset needed to craft stunning interfaces that captures each companys brand identity."
    },
  ]



  return (

    <HomeLayout>
      <div className=''>
        <div className='flex justify-center md:justify-end'>
          <img src={curveImg} alt='curveImg' width="397px" height="41px" className='' />
          {/* <IconButton aria-label="arrow">
            <ArrowDownward className='text-white'/>
          </IconButton> */}
        </div>
        <div className='bg-white text-black rounded-2xl px-2 md:px-6 lg:px-12 h-96'>
          <div className='text-center'>
            <h1 className='uppercase font-bigRiverRegular text-title md:text-title-md lg:text-title-lg'>MY STORY</h1>
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default About