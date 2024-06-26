'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import { useInView } from 'react-intersection-observer';

const Page = () => {
  const [mainImage, setMainImage] = useState('/apotek-project.png');

  const handleThumbnailClick = (src) => {
    setMainImage(src);
  };

  const { ref: mainImageRef, inView: mainImageInView } = useInView({
    triggerOnce: true,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 20 },
  };

  const textVariants = {
    visible: { opacity: 1, transition: { duration: 2, delay: 0.4 } },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    // Cleanup on unmount to prevent memory leaks
    return () => {};
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <Link href="/view_project" className="flex items-center text-blue-500 mb-4">
        <span className="mr-2">&lt;&lt;</span> Return To Home Page
      </Link>
      <div className="md:flex md:space-x-8">
        <motion.div
          ref={mainImageRef}
          initial="hidden"
          animate={mainImageInView ? "visible" : "hidden"}
          variants={imageVariants}
          className="md:w-1/2"
        >
          <h1 className="text-3xl font-bold mb-4">E-Apotek</h1>
          {/* card 1 */}
          <div className="relative">
            <Image src={mainImage} alt="E-Apotek Project" width={600} height={400} className="w-full rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
              <h2 className="text-xl font-bold">E-Apotek</h2>
              <p>E-Apotek is an website that use to note any transaction in a pharmacy shop</p>
            </div>
          </div>
          {/* card 2 */}
          <div className="flex space-x-2 mt-4">
            <Image
              src="/apotek-card1.png"
              alt="Thumbnail 1"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
              onClick={() => handleThumbnailClick('/apotek-card1.png')}
            />
            <Image
              src="/apotek-card2.png"
              alt="Thumbnail 2"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
              onClick={() => handleThumbnailClick('/apotek-card2.png')}
            />
            <Image
              src="/apotek-card3.png"
              alt="Thumbnail 3"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
              onClick={() => handleThumbnailClick('/apotek-card3.png')}
            />
          </div>
        </motion.div>
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          variants={textVariants}
          className="md:w-1/2 mt-8 md:mt-0"
        >
          <h2 className="text-2xl font-bold mb-4">E-Apotek Website</h2>
          <p className="mb-5">
          The eApotek website is a comprehensive platform designed for pharmacies, featuring user authentication with login and registration functionalities. It provides CRUD (Create, Read, Update, Delete) operations to manage medication records and transactions effectively. Users can log in to view and update the inventory, record sales transactions, and maintain accurate records of all pharmacy activities. This streamlined system ensures efficient management of pharmaceutical operations, improves inventory tracking, and enhances the overall functionality and productivity of the pharmacy.
          </p>
          <p className="font-bold mb-1">See My Website On :</p>
          <p className="font-bold mb-5 hover:text-red-500">
          <Link target='_blank' href="#">
            Sorry, this site hasn &apos; t been published yet !!! 
          </Link>
          </p>
          <p className="font-bold mb-2">See My Project On :</p>
          <div className="flex items-center space-x-2">
            <Link target='_blank' href="https://github.com/Aditya-prastya16/apotek">
              <Image src="/mdi_github.png" alt="Vercel Logo" width={20} height={20} className="w-5 h-5" />
            </Link>

            
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
