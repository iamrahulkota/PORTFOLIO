import React from 'react'
import HomeLayout from '../Layout/HomeLayout'
import Marquee from 'react-fast-marquee';
import CustomButton from '../Components/CustomComponents/CustomButton';

function Project() {

  const handleProjects = () => {
    console.log("Clicked handleProjects")
  }

  return (
    <HomeLayout>
        <div className='w-full'>
          <div className='relative text-white min-h-[82vh] flex flex-col justify-start'>
              <Marquee 
                speed={150} 
                gradient={false} 
                className='font-bigRiverRegular text-focus-title md:text-focus-title-md lg:text-focus-title-lg'>
              PROJECTS</Marquee>
              <div className="flex flex-col md:flex-row justify-between absolute w-full h-full px-2 md:px-6 lg:px-12">
                  <div className='w-96 h-full flex flex-col justify-end '>
                    <div className='text-white font-satoshiRegular'>
                        <p className='text-2xl py-10'>As a designer, I help companies 
                        to achieve their desired goals.</p>
                        <CustomButton buttonText="View my projects" buttonOnClick={handleProjects} />
                    </div>
                  </div>
                  <div className=" h-full text-black flex flex-col justify-end">
                      <div className='relative z-10 bg-white h-5/6 text-black font-satoshiRegular rounded-2xl'>
                        <p className='text-2xl'>As a designer, I help companies 
                        to achieve their desired goals.</p>
                    </div>
                  </div>
              </div>

            </div>
        </div>
    </HomeLayout>
  )
}

export default Project