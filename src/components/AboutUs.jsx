import React from "react";
import { motion } from "framer-motion";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const AboutUs = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Learn More </p>
          <h1 className={styles.sectionHeadText}>About Us</h1>
          <div className="py-4 rounded-3xl text-lg md:text-xl lg:text-xl w-full flex flex-col gap-5 items-center justify-center ">
            <p>
              DevZone 1.0, the inaugural hackathon hosted by Sushant University,
              is set to blaze a trail of innovation and technological prowess in
              the heart of Gurugram!
            </p>
            <p>
              It is not just another hackathon; it's a dynamic platform where
              students from colleges across Delhi and the NCR region will come
              together to tackle challenges.
            </p>
            <p>
              Join us on this exciting journey as we embark on a mission to
              invent, innovate, and inspire the future of education and
              technology.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(AboutUs, "aboutUs");
