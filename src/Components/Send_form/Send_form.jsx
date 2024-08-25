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
    const token = "7451990204:AAEE9UEwmYOblPWVPo8hIC32rE63qUU5Qr8";
    const chat_id = "-1002243571873"; // Guruh ID sini shu yerda kiritish kerak
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const message = `#Havas\nIsm: ${data.name}\nTel: ${data.tel}`;

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
      alert("Iltimos, shaxsiy ma'lumotlarimni qayta ishlashga rozilik bering.");
      return;
    }

    // Telefon raqamini formatlash
    const formattedTel = formData.tel.replace(/\D/g, ''); // Faqat raqamlar

    if (!formData.name || formattedTel.length < 9) {
      alert("Iltimos, barcha maydonlarni to'ldiring va telefon raqamingiz to'g'ri ekanligini tekshiring.");
      return;
    }

    if (!isChecked) {
      alert('Iltimos, shaxsiy ma\'lumotlarimni qayta ishlashga rozilik bering.');
      return;
    }
    const finalTel = `+${formattedTel}`;

    const response = await sendToTelegramBot({ ...formData, tel: finalTel });
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

  const handleTelInput = (e) => {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = '+' + (x[1] ? x[1] + ' ' : '') + (x[2] ? '(' + x[2] + ')' : '') + (x[3] ? ' ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
    setFormData({ ...formData, tel: e.target.value });
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
                Aloqa ma’lumotlaringizni qoldiring va menejerimiz loyiha haqida
                ko’proq qiziqarli ma’lumotlar beradi
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
        required
        id="tel"
        placeholder="Raqamingizni yozing"
        value={formData.tel}
        onChange={handleTelInput}
      />

                </div>
              </div>
              <div className="form_chekbox">
                <div className="form_chekbox_container">
                  {" "}
                  <input
                    type="checkbox"
                    name=""
                    required
                    checked={isChecked}
                    id="consent"
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                </div>
                <p className="name_text">
                  Shaxsiy maʼlumotlarim qayta ishlanishiga roziman{" "}
                </p>
              </div>
              <button className="name_text" onClick={handleSubmit}>
                Jo‘natish
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Send_form;
