/* eslint-disable react/no-unescaped-entities */
import universal from "../../assets/images/universal.png";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Location = () => {
  useEffect(() => {
    AOS.init({
      
      duration: 1000,
      once: true, 
    });
  }, []);
  return (
    <div className="location">
      <div className="container">
        <div className="location_box">
          <div className="location_card_left" data-aos="fade-right" data-aos-offset="-200">
            <img src={universal} alt="" className="location_img" />
          </div>
          <div className="location_card1"  data-aos="fade-left" data-aos-offset="-200">
            <h3 className="location_title">Joylashgan o`rni</h3>
            <p className="location_text">
              Qorasuv dahasi - Toshkentdagi tarixiy qaror topgan ko'rkam hudud.
              Bu yerda bir maromdagi hayot surati va poytaxtning dinamik maromi
              muvaffagiyatli tarzda uyg'unlashadi.
            </p>
            <p className="location_text">
              Bu yerda yashash ajoyib, biznes bilan shug'ullanish esa qulay
              Transport infratuzilmasi shaharning istalgan nuqtasiga oson yetib
              borish imkonini beradi: Siz faqat istagan va zarur
              yo'nalishingizni tanlashingiz kifoya.
            </p>
          </div>
          <div className="location_card2" data-aos="fade-left" data-aos-offset="-200">
            <p className="location_text2">
              <span>NRG Qorasuv</span> - Siz va yaginlaringiz uchun zarur bolgan
              barcha qulayliklarni o'zida jamlagan, shahar xaritasidagi yangi
              nuqta va o'ziga tortuvchi joyga aylanadi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
