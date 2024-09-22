import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function HomeLayout({children}) {
  return (
    <div className='bg-[#0B0C0F] px-2 md:px-6 lg:px-12'>
        <div className=''>
            <Header />
                {children}
            <Footer />
        </div>
    </div>
  )
}

export default HomeLayout