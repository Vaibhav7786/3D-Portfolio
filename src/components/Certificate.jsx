import React from "react";
import{ Tilt }from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { certificates } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, link }) => (
  <Tilt className='xs:w-[250px] w-full cursor-pointer'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      {/* Wrap the inner content with a link if `link` exists */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt={`${title} icon`}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </a>
    </motion.div>
  </Tilt>
);


const Certificate = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Skill Set</p>
        <h2 className={styles.sectionHeadText}>Certificates.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-1 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       "I'm committed to continuous learning and development, which is reflected in the certifications I have earned in various technical fields. Here are some of the certifications I hold:"
      </motion.p>

      <div className='mt-5 flex flex-wrap gap-10'>
        {certificates.map((certificate, index) => (
          <ServiceCard key={index} {...certificate} />
        ))}
      </div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       "These certifications showcase my dedication to expanding my skill set and my readiness to take on new challenges. I look forward to applying this knowledge to create impactful solutions in web development and in other technology fields."
      </motion.p>
    </>
  );
};

export default SectionWrapper(Certificate, "certificate");
