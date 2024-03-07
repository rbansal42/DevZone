import React from 'react'
import { useState,useRef } from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'

import {styles} from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'


const Contact = () => {

  const formRef=useRef()
  const [form,setForm]=useState({
    name:"",
    email:"",
    message:""
  })
  const [loading,setLoading]=useState(false)
  const handleChanges = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit=(e)=>{}

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
      variants={slideIn("left","tween",0.2,1)}
      className='flex-[0.75] rounded-2xl bg-black-100 p-8'
      >
        {/* <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}> Contact</h3>
        <form ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'>
          <label  className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text" name='name' value={form.name} onChange={handleChanges} 
            placeholder='Enter your name' 
            className='bg-tertiary py-4 px-6 rounded-lg outlined-none border-none font-medium'/>
          </label>
          <label  className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email" name='email' value={form.email} onChange={handleChanges} 
            placeholder='Enter your email' 
            className='bg-tertiary py-4 px-6 rounded-lg outlined-none border-none font-medium'/>
          </label>
          <label  className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows={7} name='message' value={form.message} onChange={handleChanges} 
            placeholder='lets talk about something' 
            className='bg-tertiary py-4 px-6 rounded-lg outlined-none border-none font-medium'/>
          </label>
          <button
          type='submit'
          className='bg-tertiary py-3 px-8 rounded-lg outlined-none w-fit border-none font-medium text-white-100 hover:bg-[#915eff] transition-all duration-300 ease-in-out flex items-center justify-center w-40 h-12 mx-auto'
          >{loading ?'Sending' :'Send'}</button>
        </form> */}
        <h1 className={`${styles.sectionHeadText}`} >Registrations opening <br /> soon ...</h1>
      </motion.div>

      <motion.div
      variants={slideIn("right","tween",0.2,1)}
      className='xl:flex-[1] xl:h-auto  md:h-[550px] h-[350px] relative '>
      
        <EarthCanvas />

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")