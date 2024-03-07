import React from 'react'

import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'

import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../style'
import {experiences} from '../constants'
import { textVariant,fadeIn } from '../utils/motion'

import {SectionWrapper} from '../hoc'

const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #1d1836' }}
      date={experience.date} 
      iconStyle={{ background: '#915eff', color: '#fff' }}
      icon={
        <div className='w-full h-full flex items-center justify-center'>
          <img src={experience.icon} alt={experience.title} className='w-10 h-10' />
        </div>
    }
    >
      {/* <h3 className="vertical-timeline-element-title">{experience.title}</h3> */}
      {/* <h4 className="vertical-timeline-element-subtitle">{experience.subtitle}</h4> */}
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
    <div>
        {/* <p className={styles.sectionSubText} >Commonly asked questions</p> */}
        <h1 className={styles.sectionHeadText}>Tracks</h1>
      
      <p  className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea blanditiis sapiente repellendus soluta esse quisquam, dolores sed magnam eveniet similique rerum qui corporis aperiam tenetur modi nostrum, sunt ratione? </p>

    </div>

    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>

    </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")