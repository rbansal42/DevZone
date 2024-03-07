import React from 'react'
import {motion} from 'framer-motion'

import {styles} from '../style'
import {SectionWrapper} from '../hoc'
import { fadeIn,textVariant } from '../utils/motion'

import {testimonials} from '../constants'

const FeedbackCard=({index, testimonial,name,designation,company,image})=>{
  return(
    <motion.div
    variants={fadeIn("","spring",index*0.2,0.3)}
    className='bg-black-200 p-10 rounded-3xl text-lg md:text-xl lg:text-xl   w-full flex flex-col gap-5 items-center justify-center '
    >
      
      <p>{testimonial[0]}</p>
      <p>{testimonial[1]}</p>
      <p>{testimonial[2]}</p>
    </motion.div>
  )
}


const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText} >Learn More </p>
          <h1 className={styles.sectionHeadText}>About Devzone</h1>
            
          <div className={` mt-5 pb-5 flex flex-wrap gap-7`}>
            {testimonials.map((testimonial,index)=>(
              <FeedbackCard
                key={testimonial.name}
                index={index}
                {...testimonial}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,"")