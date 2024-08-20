import React, { useEffect, useState, lazy, Suspense } from "react";
import About from "./Components/About/About";
import Company from "./Components/Company/Company";
import Construction from "./Components/Construction/Construction";
import Footer from "./Components/Footer/Footer";
import Blocks_location from "./Components/Blocks_location/Blocks_location";
import Location from "./Components/Location/Location";
import Nav from "./Components/Nav/Nav";
import Upcoming from "./Components/Upcoming/Upcoming";
import img1 from "./assets/images/3.jpg";
import img2 from "./assets/images/5.jpg";
import img3 from "./assets/images/1.jpg";
import Send_form from "./Components/Send_form/Send_form";
import Block_average from "./Components/Block_average/Block_average";
import Loading from "./Components/Loading/Loading";

// Houses_plan komponentini lazy loading bilan kechiktirib yuklash
const Houses_plan = lazy(() => import("./Components/Houses_plan/Houses_plan"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      if (document.readyState === 'complete') {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000); // 2 soniya kutish
      } else {
        const interval = setInterval(() => {
          if (document.readyState === 'complete') {
            setTimeout(() => {
              setIsLoading(false);
            }, 1000); // 2 soniya kutish
            clearInterval(interval);
          }
        }, 100);
      }
    };

    handlePageLoad();
    window.addEventListener('load', handlePageLoad);

    return () => window.removeEventListener('load', handlePageLoad);
  }, []);

  const images = [img1, img2, img3];

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Nav />
          <Upcoming images={images} />
          <About />
          <Location />
          <Block_average />
          <Blocks_location />
          
          {/* Suspense bilan kechiktirilgan yuklashni qo'llash */}
          <Suspense fallback={<div>Loading Houses Plan...</div>}>
            <Houses_plan />
          </Suspense>
          
          <Send_form />
          <Construction />
          <Company />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
