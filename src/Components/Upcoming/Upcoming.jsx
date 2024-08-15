/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { CiGlobe } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { Link } from "react-scroll";

const Upcoming = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const autoSlider = setInterval(nextSlide, 10000);
    return () => clearInterval(autoSlider);
  }, []);

  return (
    <div className="main-carousel " id="home">
      <div className="carousel ">
        <div className="items ">
          {images &&
            images.map((src, index) => (
              <div
                className={`img_card carousel-image ${index === currentIndex ? "current" : ""
                  }`}
                key={index}
              >
                <img src={src} alt="" className="" />
                <div className=" img_text ">
                  <div className="container">
                    <div className="upcoming_box">
                      <div className="upcoming_card">
                        <h3
                          className="slidet_text"
                          key={`navimage${index + 1}`}
                        >
                          Baxtli hayot maskaniga xush kelibsiz!
                        </h3>
                        <p className="slidet_text2">
                          NRG JOMIY - NRGning yangi biznes-klass turarjoy
                          majmuasi, mashhur ortaosiyolik shoir Abdurahmon Jomiy
                          sharafiga atalgan.
                        </p>
                      </div>
                      <div className="upcoming_icon2_card">
                        <Link to="houses"
                          smooth={true}
                          offset={-50}

                          duration={500} href="#!" className="upcoming_icon2">
                          Rejalashtirishni tanlash
                        </Link>
                      </div>
                      <div className="upcoming_icons">
                        <div className="upcoming_icons_card">
                          <a href="#!" className="upcoming_icon">
                            Jonli <br /> efir
                          </a>

                          <Link to="form"
                            smooth={true}
                            offset={-50}

                            duration={500} href="#!" className="upcoming_icon">
                            <PiPhoneCallLight className="upcoming_phone" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;