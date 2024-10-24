import React from 'react'
import HomeLayout from '../Layout/HomeLayout'
import CustomButton from '../Components/CustomComponents/CustomButton';

function Home() {

  const handleClick = () => {
    console.log('Projects Button clicked!');
};

  return (
    <HomeLayout>
          <CustomButton buttonText="Projects" buttonOnClick={handleClick}/>
    </HomeLayout>
  )
}

export default Home