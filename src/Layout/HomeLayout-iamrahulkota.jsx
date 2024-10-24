import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

function HomeLayout({children}) {
  return (
    <div className='bg-[#0B0C0F] '>
            <Header />
                {children}
            <Footer />
    </div>
  )
}

export default HomeLayout