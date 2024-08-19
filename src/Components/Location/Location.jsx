/* eslint-disable react/no-unescaped-entities */
import universal from "../../assets/images/4.jpg";
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
          <div className="location_card1" data-aos="fade-left" data-aos-offset="-200">
            <h3 className="location_title"> Loyiha joylashuvi</h3>
            <p className="location_text">
              Havas Premium turar-joy majmuasi Samarqand shahri Mirzo Ulugbyek koʻchasi 71-uyda joylashgan. Bu yerda yuqori klassga mansub xonadonlar sotiladi.
            </p>
            <p className="location_text">
              Majmua yuqori sifatli qurilish materiallaridan tajribali quruvchilar tomonidan barpo etilmoqda. Hovlida bolalar maydonchasi, savdo doʻkonlari, dorixona va goʻzallik salonlari boʻladi.

            </p>
            <p className="location_text">
            Bu yerda yashash ajoyib, biznes bilan shug'ullanish esa qulay.
            Transport infratuzilmasi shaharning istalgan nuqtasiga oson yetib borish imkonini beradi: siz faqat istagan va zarur yo'nalishingizni tanlasangiz kifoya.
            </p>
          </div>
          <div className="location_card2" data-aos="fade-left" data-aos-offset="-200">
            <p className="location_text2">
              <span>Havas Premium</span> Siz va oilangiz uchun zarur boʻlgan barcha qulayliklarni 
oʻzida jamlagan, shaharning yangi markaziga aylanadigan turar-joy 
majmuasi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
