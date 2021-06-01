import API from "../backend";

export const getToken = (userId, token) => {
  return fetch(`${API}/payment/gettoken/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(data => {
      return data.json();
    })
    .catch(err => console.log(err));
};

export const processPayment = (userId, token, paymentInfo) => {
  console.log("in process pay.", paymentInfo);
  return fetch(`${API}/payment/braintree/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(paymentInfo)
  })
    .then(data => {
      return data.json();
    })
    .catch(err => console.log(err));
};
