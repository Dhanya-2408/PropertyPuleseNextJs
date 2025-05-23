import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { GlobalProvider } from '@/context/GlobalContext';
import "@/assets/styles/globals.css";
import "photoswipe/dist/photoswipe.css";
import AuthProvider from './provider/AuthProvider';
import { ToastContainer } from "react-toastify";


export const  metadata = {
    title  : "Property Management System",
    keywords : ["property", "rental", "system"],
    description : "A property management system for landlords and tenants",
};

 const MainLayout = ({ children}) => {
  return (

  
    <AuthProvider>
      <GlobalProvider>
        <html lang='en'>
         <body className="grid min-h-screen grid-rows-[auto,1fr,auto]">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
   
  );
}

export default MainLayout;