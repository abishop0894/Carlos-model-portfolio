"use client"
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface RowProps {
  heading: string;
  paragraph?: string;
  button?: boolean;  // Boolean to show/hide button
  buttonContent?: React.ReactNode;  // Button content as a React element
  mediaSrc: string;
  mediaType: 'image' | 'video';
}

const Row: React.FC<RowProps> = ({ 
  heading, 
  paragraph, 
  button = false, 
  buttonContent, 
  mediaSrc, 
  mediaType 
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { ease: 'easeOut' } },
  };

  const mediaVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { ease: 'easeOut', duration: 0.8 } },
  };

  return (
    <div className="w-full flex flex-col lg:flex-row h-[100vh]" ref={ref}>
      {/* Text Section */}
      <motion.div 
        className="flex flex-col justify-center p-4 h-[50vh] lg:h-[50] xl:h-screen lg:w-1/2 space-y-[2vh]"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2 className="text-3xl lg:text-5xl font-bold" variants={itemVariants}>
          {heading}
        </motion.h2>
        {paragraph && (
          <motion.p className="text-base lg:text-lg" variants={itemVariants}>
            {paragraph}
          </motion.p>
        )}
        {button && buttonContent && (
          <motion.div variants={itemVariants}>
            {buttonContent}
          </motion.div>
        )}
      </motion.div>

      {/* Media Section */}
      <motion.div 
        className="flex items-center justify-center h-[50vh] lg:h-50 2xl:h-screen lg:w-1/2"
        initial="hidden"
        animate={controls}
        variants={mediaVariants}
      >
        {mediaType === 'image' ? (
          <img src={mediaSrc} alt="Media" className="object-cover h-full w-full" />
        ) : (
          <video src={mediaSrc} controls className="object-cover h-full w-full" />
        )}
      </motion.div>
    </div>
  );
};

export default Row;