import API from "../backend";

export const getProducts = () => {
  return fetch(`${API}/products`)
    .then(data => {
      return data.json();
    })
    .catch(err => console.log(err));
};
