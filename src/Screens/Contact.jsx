import React, { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
// import { Toaster } from "@/components/ui/toaster"
// import { useToast } from "@/components/hooks/use-toast"
import HomeLayout from '../Layout/HomeLayout'
import CustomButton, { StyledButton } from '../Components/CustomComponents/CustomButton'
import { Button, FormControl, Typography } from '@mui/material'
import { StyledInput } from '../Components/CustomComponents/CustomInput'

function Contact() {
  // const { toast } = useToast();
  const form = useRef();
  const [isDisabled, setIsDisabled] = useState(false);
  const [mainData, setMainData] = useState({
      name : "",
      email : "",
      textarea : "",
  })

  useEffect(()=>{
    const { name, email, textarea } = mainData;
    if(name && email && textarea )
      {
        setIsDisabled(false)
      }
      else
      {
        setIsDisabled(true)
      }
    console.log(mainData, "MAINDATA")
  },[mainData])



  function handleFormSubmit(event){
    event.preventDefault()

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_ID = import.meta.env.VITE_PUBLIC_ID;

    // console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_ID)

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_ID,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (emailPattern.test(mainData.email)) {
    //   console.log("Valid email address");
    // } else {
    //   setTimeout(() => {
    //     toast({
    //       title: "Form submitted",
    //       description: "We've received invaild email address.",
    //     })
    //   }, 2000)
    //   console.log("");
    // }
    console.log("Form clicked")
  }

  return (
    <HomeLayout>
        <div className='h-screen flex justify-center items-center'>
            <div className='bg-white w-[525px] py-12 px-10 text-[22px] rounded-3xl'>
              <h1 className='text-center'>Please fill out the form below and I will be in touch within 24 hours.</h1>
              <form ref={form} onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <FormControl className='w-full' defaultValue="" required>
                    <Typography >Your Good name</Typography>
                    <StyledInput 
                      required 
                      name="name"
                      value={mainData?.name}
                      onChange={(e)=>{
                        setMainData({...mainData, name : e.target.value})
                      }}
                      placeholder="Enter your good name :)" />
                  </FormControl>
                  <FormControl className='w-full' defaultValue="" required>
                    <Typography >Email</Typography>
                    <StyledInput 
                      required 
                      name="email"
                      value={mainData?.email}
                      onChange={(e)=>{
                        setMainData({...mainData, email : e.target.value})
                      }} 
                      placeholder="info@gmail.com" />
                  </FormControl>
                  <FormControl className='w-full' defaultValue="" required>
                    <Typography >Text Area</Typography>
                    <StyledInput 
                      required 
                      name="message"
                      value={mainData?.textarea}
                      onChange={(e)=>{
                        setMainData({...mainData, textarea : e.target.value})
                      }}
                      placeholder="Enter your good name :)" />
                  </FormControl>
                </div>
                <div className='flex justify-end'>
                  <Button 
                    value="Send"
                    type='submit' 
                    variant='filled'
                    disabled={isDisabled}
                    className={`${isDisabled ? "bg-grey" : "!bg-[#0B0C0F] !text-white"} !uppercase !py-2 !px-6 !cursor-pointer !rounded-3xl`}
                    >Submit it</Button>
                </div>
              </form>
            </div>
        </div>
        {/* <CustomButton>SCHEDULE A CALL</CustomButton> */}
    </HomeLayout>
  )
}

export default Contact