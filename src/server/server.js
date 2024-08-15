/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 5173;

const TELEGRAM_BOT_TOKEN = '7297513053:AAFtbkBE-yEHI8UoovkImnz-ITd-jlJOcew';
const TELEGRAM_CHAT_ID = '-4226225906';

app.use(bodyParser.json()); 

app.post('/send-message', async (req, res) => {
    const { name, phone } = req.body;

    const telegramMessage = `Yangi xabar:\n\nIsm: ${name}\nTelefon raqami: ${phone}`;

    try {
        await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            chat_id: TELEGRAM_CHAT_ID,
            text: telegramMessage,
        });

        res.status(200).send('Xabar muvaffaqiyatli yuborildi');
    } catch (error) {
        res.status(500).send('Xabar yuborishda xatolik yuz berdi');
    }
});

app.listen(port, () => {
    console.log(`Server http://localhost:${port} da ishlamoqda`);
});
const cors = require('cors');
app.use(cors());
