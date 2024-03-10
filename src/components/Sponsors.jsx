import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { Computers } from "./canvas";

import { SectionWrapper } from "../hoc";

const Sponsors = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col gap-5">
        <h1 className={styles.sectionHeadText}>Our Sponsors</h1>

        <div className="flex gap-8">
          <a href="https://devfolio.co"><img src="/public/devfolio-logo.png" alt="DEVFOLIO LOGO" className="w-[15rem]"/></a>
          <a href="https://polygon.technology/"><img src="/public/polygon-logo.png" alt="POLYGON LOGO" className="w-[15rem]"/></a>
          <a href="https://ethindia.co "><img src="/public/ethindia-logo.png" alt="ETHINDIA LOGO" className="w-[15rem]"/></a>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Sponsors, "sponsors");
