import axios from "axios";
const baseURL = "https://rest.coinapi.io/";

const axiosCreate = (isHeader = true, withCredentials = false) => {
 
  const client = axios.create({
    baseURL: baseURL,
    withCredentials: withCredentials,
    headers: {
      'X-CoinAPI-Key': '3BA50CCD-0944-4C6A-817F-EFC9BB610E6C',
      "Content-Type": "application/json",
    },
  });

  return client;
};

export default axiosCreate;
