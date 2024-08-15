// /* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import universal from "../../assets/images/universal.png";
import { useEffect } from "react";
import { useRef } from "react";
import logo from '../../assets/images/logo.png'


const Company = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
      const handleScroll = () => {
          if (!hasAnimated && sectionRef.current) {
              const sectionTop = sectionRef.current.getBoundingClientRect().top;
              const windowHeight = window.innerHeight;

              if (sectionTop < windowHeight) {
                  animateNumber(0, 1684, 1000, setNumber1);
                  animateNumber(0, 188430, 1000, setNumber2);
                  setHasAnimated(true); 
              }
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, [hasAnimated]);
  const animateNumber = (start, end, duration, setNumber) => {
    const increment = (end - start) / (duration / 1);
    let currentNumber = start;

    const timer = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= end) {
            setNumber(end);
            clearInterval(timer);
        } else {
            setNumber(Math.round(currentNumber));
        }
    }, 1);
};
  return (
    <div className="company" >
      <div className="container">
        <div className="company_box">
        <div className="company_card_img">
            <img src={universal} alt="" className="company_img" />
            <div className="company_img_bg">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="company_card">
            <div className="company_card_top">
              <h2 className="company_title">Quruvchi kompaniya to‘g‘risida</h2>
              <p className="company_text">
                Sizning uyingizda hozirdan baxtli oilalar yashamogdalar,
                bolajonlar birinchi do'stlarini topmoqdalar va do stona
                qo'shnichilik madaniyati gullab-yashnamoqda.
              </p>
              <p className="company_text">
                NRG - O'zbekiston va Qozog'iston qardosh xalqlarining do'stligi
                va madaniy birligining, hamfikrlilik ittifogining yaggol
                tasdig'idir. Biz o'zbek xalgining ko'p asrlik eng zo'r me'moriy
                ananalari bilan Qozog'istonning ilg'or qurilish tajribasini
                mujassamlashtirmoqdamiz.
              </p>
              <p className="company_text">
                Biz hayot uchun qulay makon barpo etmoqdamiz, 24/7 sifatli
                servis va maishiy masalalarda kafolatlangan yordam taqdim etamiz
              </p>
            </div>
            <div className="company_card_bottom" ref={sectionRef}>
              <div className="company_card_bottom_numbers">
                <h3> + {number1.toLocaleString()}</h3>
                <p>
                  Oila bizning uylarda <br /> yashamoqda
                </p>
              </div>
              <div className="company_card_bottom_numbers company_card_bottom_numbers2">
                <h3>
                + {number2.toLocaleString()} m<span>2</span>
                </h3>
                <p>
                  Xonadonlar qurib bitkazilib <br /> o‘z egalariga topshirildi
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Company;
