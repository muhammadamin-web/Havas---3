import About from "./Components/About/About";
import Company from "./Components/Company/Company";
import Construction from "./Components/Construction/Construction";
import Footer from "./Components/Footer/Footer";
import Blocks_location from "./Components/Blocks_location/Blocks_location";
import Location from "./Components/Location/Location";
import Nav from "./Components/Nav/Nav";
import Upcoming from "./Components/Upcoming/Upcoming";
import img1 from "./assets/images/intro1.png";
import img2 from "./assets/images/intro2.jpeg";
import img3 from "./assets/images/intro3.jpeg";
import Send_form from "./Components/Send_form/Send_form";
import Block_average from "./Components/Block_average/Block_average";
import Houses_plan from "./Components/Houses_plan/Houses_plan";
import { useEffect, useState } from "react";
import Loading from "./Components/Loading/Loading";

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
          <Houses_plan />
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
