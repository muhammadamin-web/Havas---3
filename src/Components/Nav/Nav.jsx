import logo from "../../assets/images/logo.svg";
import { PiPhoneCallLight } from "react-icons/pi";
import { RxDownload } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosCloseCircle } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";
import { IoMdClose } from "react-icons/io";
import txt from "../../assets/images/txt.png";

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav_box_container">
            <div className="nav_box">
              <div className="nav_card_left">
                <a href="#!">
                  <img className="nav_logo" src={logo} alt="" />
                </a>
                <div className={`nav_list_menu ${active && "active"}`}>
                  <div className="container2">
                    <div className="nav_list_card">
                      <BiMenuAltLeft className="nav_menu_logo" />
                      <a href="#!">
                        <img className="nav_logo" src={logo} alt="" />
                      </a>
                      <IoMdClose
                        className="nav_close"
                        onClick={() => setActive(false)}
                      />
                    </div>
                    <ul className="nav_list">
                      <li>
                        <Link
                          to="about"
                          smooth={true}
                          duration={500}
                          offset={-50}
                          href="#!"
                          className="nav_link"
                          onClick={() => setActive(false)}
                        >
                          Loyiha haqida
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="average"
                          smooth={true}
                          duration={500}
                          href="#!"
                          className="nav_link"
                          onClick={() => setActive(false)}
                        >
                          Bloklar joylashuvi
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="houses"
                          smooth={true}
                          duration={500}
                          offset={-50}
                          onClick={() => setActive(false)}
                          href="#!"
                          className="nav_link"
                        >
                          Xonadonlarni rejalashtirish
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="company"
                          smooth={true}
                          duration={500}
                          onClick={() => setActive(false)}
                          href="#!"
                          className="nav_link"
                        >
                          Kompaniya haqida
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="footer"
                          smooth={true}
                          duration={500}
                          offset={-50}
                          href="#!"
                          className="nav_link"
                          onClick={() => setActive(false)}
                        >
                          Bog‘lanish{" "}
                        </Link>
                      </li>
                    </ul>
                    <div className="nav_icons">
                      <a
                        href="https://www.facebook.com/txtgroup.uzb"
                        className="nav_icons_card"
                      >
                        <FaFacebookF className="nav_icons_icon" />
                      </a>
                      <a
                        href="https://www.instagram.com/txtgroup.uzb"
                        className="nav_icons_card"
                      >
                        <FaInstagram className="nav_icons_icon" />
                      </a>
                      <a
                        href="https://t.me/txtgroupuzb"
                        className="nav_icons_card"
                      >
                        <FaTelegramPlane className="nav_icons_icon" />
                      </a>
                      <a href="!#" className="nav_icons_card">
                        <FaYoutube className="nav_icons_icon" />
                      </a>
                    </div>
                    <div className="nav_card_right menu">
                      <div className="nav_contact">
                        <PiPhoneCallLight className="nav_phone_icon" />
                        <Link   smooth={true}
                          duration={500}
                          offset={-50} to="form"  href="#!"                     onClick={() => setActive(false)}
                          className="nav_contact_text">
                          1361
                        </Link>
                      </div>
                      <div className="nav_download">
                        <RxDownload className="nav_phone_icon" />
                        <div className="nav_download_card">
                          <p className="nav_download_text1">Taqdimot</p>
                          <p className="nav_download_text2">
                            5.3 mb yuklab olish
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav_card_right">
                <div className="nav_contact">
                  <PiPhoneCallLight className="nav_phone_icon" />
                  <Link  smooth={true}
                          duration={500}
                          offset={-50} to="form"  href="#!"
                           className="nav_contact_text">
                    1361
                  </Link>
                  <IoMenu
                    className="nav_menu"
                    onClick={() => setActive(true)}
                  />
                </div>
                <div className="nav_download download">
                  <RxDownload className="nav_phone_icon" />
                  <div className="nav_download_card">
                    <p className="nav_download_text1">Taqdimot</p>
                    <p className="nav_download_text2">5.3 mb yuklab olish </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav_txt">
              <img src={txt} alt="" className="nav_txt_img" />
            </div>
          </div>
        </div>
      </nav>

      {/* <nav className={`nav nav2 ${active && 'active'}`}>
        <div className="container">
        <div className={`nav_box2 ${active && 'active'}`}>
          <BiMenuAltLeft className="nav_menu_logo" />
          <div className="nav_box2_card">
            <div className="nav_card_left nav_box2_left">
              <a href="#!">
                <img className="nav_logo" src={logo} alt="" />
              </a>
              <ul className="nav_list nav_box2_list">
                <li>
                  <a href="#!" className="nav_link">
                    Loyiha haqida
                  </a>
                </li>
                <li>
                  <a href="#!" className="nav_link">
                    Joylashgan o‘rni
                  </a>
                </li>
                <li>
                  <a href="#!" className="nav_link">
                    Hovli
                  </a>
                </li>
                <li>
                  <a href="#!" className="nav_link">
                    Xollar
                  </a>
                </li>
                <li>
                  <a href="#!" className="nav_link">
                    Rejalashtirish
                  </a>
                </li>
                <li>
                  <a href="#!" className="nav_link">
                    Bog‘lanish{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav_icons">
              <div className="nav_icons_card">
                <FaFacebookF className="nav_icons_icon" />
              </div>
              <div className="nav_icons_card">
                <FaInstagram className="nav_icons_icon" />
              </div>
              <div className="nav_icons_card">
                <FaTelegramPlane className="nav_icons_icon" />
              </div>
              <div className="nav_icons_card">
                <FaYoutube className="nav_icons_icon" />
              </div>
            </div>
            <div className="nav_social">
              <p className="nav_social_text">
                Jonli <br /> efir
              </p>
              <p className="nav_social_text">
                <CiGlobe className="nav_globe" />
                360
              </p>
              <p className="nav_social_text">
                <PiPhoneCallLight className="nav_phone" />
              </p>
            </div>
            <div className="nav_card_right">
              <div className="nav_contact">
                <PiPhoneCallLight className="nav_phone_icon" />
                <a href="tel: 1066" className="nav_contact_text">
                  1066
                </a>
              </div>
              <div className="nav_download nav_box2_download">
                <RxDownload className="nav_phone_icon" />
                <div className="nav_download_card">
                  <p className="nav_download_text1">Taqdimot</p>
                  <p className="nav_download_text2">5.3 mb yuklab olish </p>
                </div>
              </div>
            </div>
          </div>
          <IoIosCloseCircle className="nav_close" onClick={() => setActive(false)}/>
        </div>
        </div>
    </nav> */}
    </>
  );
};

export default Nav;
