/* eslint-disable no-unused-vars */
import { useState } from "react";
import form from "../../assets/images/form.png";


const Send_form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
  });

  const sendToTelegramBot = async (data) => {
    const token = "7297513053:AAFtbkBE-yEHI8UoovkImnz-ITd-jlJOcew";
    const chat_id = "-4226225906"; // Guruh ID sini shu yerda kiritish kerak
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const message = `Ism: ${data.name}\nTel: ${data.tel}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chat_id,
          text: message,
        }),
      });

      if (!response.ok) {
        throw new Error("Telegram API bilan muammo yuz berdi");
      }

      return response.json();
    } catch (error) {
      console.error("Xatolik:", error);
      return null;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isChecked) {
      alert('Iltimos, shaxsiy ma\'lumotlarimni qayta ishlashga rozilik bering.');
      return;
    }

    const response = await sendToTelegramBot(formData);
    if (response && response.ok) {
      alert("Xabar yuborildi!");

      // Formani tozalash
      setFormData({
        name: "",
        tel: "",
      });
      setIsChecked(false);
    } else {
      alert("Xabar yuborishda xatolik yuz berdi");
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="container">
        <div className="form_box">
          <div className="form_card_left">
            <img src={form} alt="" />
          </div>
          <div className="form_card_right">
            <div className="card_right_box">
              <h3 className="form_title">Mutaxassis bilan suhbat</h3>
              <p className="form_text">
              Telefon raqamingizni qoldiring, mutaxassislarimiz tez orada siz bilan bogʻlanib, loyiha haqida batafsil maʼlumot berishadi.
              </p>
              <div className="data_box">
                <div className="data_box_name">
                  <p className="name_text">Ismingiz</p>
                  <input
                    type="text"
                    placeholder="Ismingizni yozing"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="data_box_name">
                  <p className="name_text">Telefon</p>
                  <input
                    type="text"
                    name="tel"
                    id="tel"
                    placeholder="Raqamingizni yozing"
                    value={formData.tel}
                    onChange={(e) =>
                      setFormData({ ...formData, tel: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form_chekbox">
                <input type="checkbox" name="" checked={isChecked} id="consent" onChange={(e) => setIsChecked(e.target.checked)}/>
                <p className="name_text">
                Shaxsiy maʼlumotlarim qayta ishlanishiga roziman                </p>
              </div>
              <button className="name_text" onClick={handleSubmit}>
              Yuborish
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Send_form;
