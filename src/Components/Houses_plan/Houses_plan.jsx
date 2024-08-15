import { useState } from "react";
import houses from '../../assets/images/houses_plan.png';
import universal from '../../assets/images/universal.png';

const Houses_plan = () => {
  const [activeNumber, setActiveNumber] = useState("Hammasi");

  const handleNumberClick = (number) => {
    setActiveNumber(number);
  };

  return (
    <div className="houses">
      <div className="container">
        <div className="houses_box">
          <div className="houses_card_top">
            <h2 className="houses_title">Xonadonlarning o‘ylangan rejalari</h2>
            <div className="houses_card_number">
              {["Hammasi", "1-xonali", "2-xonali", "3-xonali", "4-xonali"].map(
                (number) => (
                  <p
                    key={number}
                    className={`houses_number ${
                      activeNumber === number ? "active" : ""
                    }`}
                    onClick={() => handleNumberClick(number)}
                  >
                    {number}
                  </p>
                )
              )}
            </div>
          </div>

          {/* Showing corresponding content based on activeNumber */}
          {activeNumber === "Hammasi" && (
            <div className="houses_card_bottom">
              <img src={houses} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={houses} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={houses} alt="" className="houses_img" />
            </div>
          )}

          {activeNumber === "1-xonali" && (
            <div className="houses_card_bottom1">
              <img src={universal} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={universal} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={universal} alt="" className="houses_img" />
            </div>
          )}

          {activeNumber === "2-xonali" && (
            <div className="houses_card_bottom2">
              <img src={universal} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={universal} alt="" className="houses_img" />
              <div className="houses_border"></div>
              <img src={universal} alt="" className="houses_img" />
            </div>
          )}

          {/* You can continue adding more conditions for "3-xonali", "4-xonali", etc. */}
        </div>
      </div>
    </div>
  );
};

export default Houses_plan;


