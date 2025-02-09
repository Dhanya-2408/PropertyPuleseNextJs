import React from 'react'
import "@/assets/styles/globals.css"
import InfoBoxes from '@/components/InfoBoxes'
import Hero from '@/components/Hero';
import PropertiesPage from './properties/page';

const page = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <PropertiesPage/>
    </>
  );
}

export default page