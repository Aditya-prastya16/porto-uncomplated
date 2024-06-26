'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Page = () => {
  const [mainImage, setMainImage] = useState('/nextcrud.png');

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
    visible: { opacity: 1, transition: { duration: 2, delay: 0.2 } },
    hidden: { opacity: 0 },
  };

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
          <h1 className="text-3xl font-bold mb-4">Next CRUD</h1>
          {/* Main Image */}
          <div className="relative">
            <Image src={mainImage} alt="Main Image" width={600} height={400} className="w-full rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
              <h2 className="text-xl font-bold">Next CRUD</h2>
              <p>CRUD website is a website that uses to create, update, read and delete data with search functionality</p>
            </div>
          </div>
          {/* Thumbnails */}
          <div className="flex space-x-2 mt-4">
            <Image
              src="/crud-card1.png"
              alt="Thumbnail 1"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer hover:scale-110 transition duration-300 ease-in-out" // Added hover effect
              onClick={() => handleThumbnailClick('/crud-card1.png')}
            />
            <Image
              src="/crud-card2.png"
              alt="Thumbnail 2"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer hover:scale-110 transition duration-300 ease-in-out" // Added hover effect
              onClick={() => handleThumbnailClick('/crud-card2.png')}
            />
            <Image
              src="/crud-card3.png"
              alt="Thumbnail 3"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer hover:scale-110 transition duration-300 ease-in-out" // Added hover effect
              onClick={() => handleThumbnailClick('/crud-card3.png')}
            />
            <Image
              src="/crud-card4.png"
              alt="Thumbnail 4"
              width={200}
              height={100}
              className="w-1/4 rounded-lg cursor-pointer hover:scale-110 transition duration-300 ease-in-out" // Added hover effect
              onClick={() => handleThumbnailClick('/crud-card4.png')}
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
          <h2 className="text-2xl font-bold mb-4">CRUD Website</h2>
          <p className="mb-5">
            Our website, meticulously developed using Next.js, is designed to offer comprehensive CRUD (Create, Read, Update, Delete) functionality. It seamlessly integrates advanced search and pagination features, which are essential for effective data management. Users can effortlessly create new entries, read and view existing records, update information, and delete unwanted data. The robust search capabilities enable quick location of specific records, while the intuitive pagination system allows smooth navigation through extensive data collections. This ensures an efficient, user-friendly experience, making data handling straightforward and accessible for all users.
          </p>
          <p className="font-bold mb-1">See My Website On :</p>
          <p className="font-bold mb-5 hover:text-blue-500">
            <Link target='_blank' href="https://simple-crud-next-2gq5.vercel.app/">
              https://simple-crud-next-2gq5.vercel.app/
            </Link>
          </p>
          <p className="font-bold mb-2">See My Project On :</p>
          <div className="flex items-center space-x-2">
            <Link target='_blank' href="https://github.com/Aditya-prastya16/SimpleCRUD-next">
              <Image src="/mdi_github.png" alt="GitHub Logo" width={20} height={20} className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
