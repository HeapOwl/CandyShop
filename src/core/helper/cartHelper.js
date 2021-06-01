export const addToCart = (item, next) => {
  let cart = [];
  if (window) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.push({
      ...item,
      count: 1
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};

export const loadCart = () => {
  if (window) {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart"));
    }
  }
};

export const removeItem = pid => {
  let cart = [];
  if (window) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
      cart = cart.filter(p => p._id != pid);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
};

export const emptyCart = next => {
  if (window) {
    localStorage.removeItem("cart");
    let cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  next();
};
