import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react'


export const  metadata = {
    title  : "Property Management System",
    keywords : ["property", "rental", "system"],
    description : "A property management system for landlords and tenants",
};

 const MainLayout = ({ children}) => {
  return (
    <html>
      <body>
        <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default MainLayout;