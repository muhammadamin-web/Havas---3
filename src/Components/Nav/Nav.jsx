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
                      <IoIosCloseCircle
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
                        <Link to="houses"
                          smooth={true}
                          duration={500}
                          offset={-50}
                          onClick={() => setActive(false)}
                          href="#!" className="nav_link"
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
                      <a href="https://www.facebook.com/txtgroup.uzb" className="nav_icons_card">
                        <FaFacebookF className="nav_icons_icon" />
                      </a>
                      <a href="https://www.instagram.com/txtgroup.uzb" className="nav_icons_card">
                        <FaInstagram className="nav_icons_icon" />
                      </a>
                      <a href="https://t.me/txtgroupuzb" className="nav_icons_card">
                        <FaTelegramPlane className="nav_icons_icon" />
                      </a>
                      <div className="nav_icons_card">
                        <FaYoutube className="nav_icons_icon" />
                      </div>
                    </div>
                    <div className="nav_card_right menu">
                        <a href="tel:1361" className="nav_contact">
                          <PiPhoneCallLight className="nav_phone_icon" />
                          <span href="tel:1361" className="nav_contact_text" onClick={() => setActive(false)}>
                            1361
                          </span>
                        </a>
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
                  <a href="tel:1361" className="nav_contact">
                    <PiPhoneCallLight className="nav_phone_icon" />
                    <span className="nav_contact_text">
                      1361
                    </span>
                  </a>
                  <IoMenu className="nav_menu" onClick={() => setActive(true)} />
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

    </>
  );
};

export default Nav;
