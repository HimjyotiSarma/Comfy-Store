import axios from "axios";

export const customFetch = axios.create({
  baseURL: "https://strapi-store-server.onrender.com/api",
});

export const formatPrice = (price) => {
  const dollarAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD", // Later Change format Once Backend Changed
  }).format((price / 100).toFixed(2));

  return dollarAmount;
};

export const generateAmount = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;

    return <option key={amount} value={amount}>{amount}</option>;
  });
};
