import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import "@/assets/styles/globals.css";
import "photoswipe/dist/photoswipe.css";
import AuthProvider from './provider/AuthProvider';


export const  metadata = {
    title  : "Property Management System",
    keywords : ["property", "rental", "system"],
    description : "A property management system for landlords and tenants",
};

 const MainLayout = ({ children}) => {
  return (
    <AuthProvider>
      <html>
        <body className="grid min-h-screen grid-rows-[auto,1fr,auto]">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}

export default MainLayout;