import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn,textVariant,slideIn} from '../utils/motion'
import {styles} from '../style'
import { SectionWrapper } from '../hoc'
import { StarsCanvas } from './canvas'




const Extrapage = ({title,subtitle,image,content,handleToggle,section}) => {
    
    return (
    <div id='extrapage' className=" bg-hero-pattern w-full bg-no-repeat bg-center px-10 py-24 bg-cover  min-h-[100vh]">
        {console.log(title,subtitle,image,content)}
        

            <div variants={textVariant()}>
                <p className={styles.sectionSubText} >Introduction</p>
                <h1 className={styles.sectionHeadText}>{title}</h1>
            </div>
            
        
        <div className='object-contain h-max-[100px] mt-[50px]'>
            <img src={image} alt="image"  />
        </div>
        <div className='mt-[50px]'>
            <p className="text-white-100">{subtitle}</p>
            <p className="text-white-100">{content}</p>
        </div>


        <div className='flex w-full justify-center'>

            <a href={`#${section}`} onClick={handleToggle}>
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
                animate={{
                    y: [0, 24, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
                />
            </div>
            </a>
        </div>
        
    </div>
  )
}

export default Extrapage