import React, { useEffect } from 'react';
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/GlobalStyles";
import { dark } from "./assets/styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css'

import Home from "./section/Home";
import { AnimatePresence } from "framer-motion";
import About from "./section/About";
import Shop from "./section/Shop";
import ScrollTriggerProxy from './components/ScrollTriggerProxy';
import Banner from './section/Banner';
import NewArrival from './section/NewArrival';
import Footer from './section/Footer';
import Loader from './components/Loader';
import { useState } from 'react';


function App() {
  const containerRef = useRef(null)

  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setloaded(true)
    }, 3000);
  }, [])
  

  return (
    <>
    <GlobalStyles />
      
    <ThemeProvider   theme={dark}  >
     
     <LocomotiveScrollProvider
      options={
           {
       smooth: true,
      // ... all available Locomotive Scroll instance options 
      smartphone:{
        smooth: true,
      },
      tablet:{
        smooth: true,
      }
    }
  }
  watch={
    [
      //..all the dependencies you want to watch to update the scroll.
      //  Basicaly, you would want to watch page/location changes
      //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
      ]
      }
      containerRef={containerRef}
    >
      <AnimatePresence>
      {loaded ? null : <Loader />}
      </AnimatePresence>

      <ScrollTriggerProxy />
      <AnimatePresence>
      <main className='App' data-scroll-container ref={containerRef}>
         <Home />
         <About />
         <Shop />
         <Banner />
         <NewArrival />
         <Footer />
      </main>
      </AnimatePresence>

    </LocomotiveScrollProvider>
    </ThemeProvider>
    
    </>
  );
}

export default App;
