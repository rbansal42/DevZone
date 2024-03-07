import React, { useState } from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../style'
import {services} from '../constants'
import {fadeIn,textVariant,slideIn} from '../utils/motion'

import { SectionWrapper } from '../hoc'
import Extrapage from './Extrapage'


const About = () => {

  const [data,setdata]=useState({visible:false,title:"",subtitle:"",image:"",content:""})
  const handleToggle=()=>{
    setdata({...data,visible:!data.visible})
  }
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText} >Introduction</p>
        <h1 className={styles.sectionHeadText}>What is Devzone</h1>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'> DevZone 1.0, the inaugural
hackathon hosted by Sushant University,
set to blaze a trail of innovation and
technological prowess in the heart of
Gurugram!
 </motion.p>
      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <motion.div  key={index} variants={fadeIn("right", "spring", index*0.2, 0.3)} className='flex  flex-col items-center max-w-[250px] text-center  gap-4' onClick={()=>{setdata({visible:true,title:service.title,subtitle:service.subtitle,image:service.icon,content:""})}}>
            <a href="#extrapage">
              
              <Tilt options={{ max: 30, scale: 1.2 ,speed:450 }}>
                <div className='bg-tertiary green-pink-gradient shadow-card p-[1px] w-auto rounded-3xl min-w-[250px]  gap-10 h-auto flex flex-col justify-center items-center'>
                  <div className='w-full h-full min-h-[300px] gap-5 rounded-3xl flex flex-col justify-evenly items-center bg-tertiary'>
                    <div className='w-20 h-20 rounded-full bg-[#915eff] flex justify-center items-center'>
                      <img src={service.icon} alt={service.title} className='w-10 h-10' />
                    </div>
                    <p className='text-white text-[17px] px-5 text-wrap font-bold'>{service.title}</p>
                    <p className='text-secondary text-[17px] px-5 text-wrap'>{service?.subtitle}</p>

                  </div>
                </div>
              </Tilt>
            </a>
          </motion.div>
        ))}
        {console.log(data)}
        {data.visible && <Extrapage title={data.title} subtitle={data.subtitle} image={data.image} content={data.content} handleToggle={handleToggle} section={"about"} />}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")