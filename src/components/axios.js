import axios from "axios";
export const SendEmail = async (sendEmail) => {
  try {
    const send = await axios.post("http://192.168.1.7:5000/Send", sendEmail);
    debugger;
    return send.data;
  } catch (err) {
    debugger;
    console.log(err);
    return err;
  }
};

export const SendSMS = async (SMS) => {
  try {
    const send = await axios.post("http://192.168.1.7:5000/SendSms", SMS);
    return send.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const SendWhatsapp = async (SMS) => {
  try {
    const send = await axios.post("http://192.168.1.7:5000/SendWhatsapp", SMS);
    return send.data;
  } catch (err) {
    console.log("Buenas taredes");
    return err;
  }
};

export const SendVoice = async (Voice) => {
  try {
    const send = await axios.post("http://192.168.1.7:5000/SendVoice", Voice);
    return send.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
