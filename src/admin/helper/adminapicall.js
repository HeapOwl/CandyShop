import API from "../../core/backend";

export const createCategory = (uid, token, name) => {
  return fetch(`${API}/category/create/${uid}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(name),
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
};

export const getallCategory = () => {
  return fetch(`${API}/categories`, {
    method: "GET",
  })
    .then((data) => {
      return data.json();
    })
    .catch((err) => {
      return console.log(err);
    });
};

export const createProduct = (uid, token, product) => {
  return fetch(`${API}/product/create/${uid}`, {
    method: "POST",
    headers: {
      Accept: "application/json",

      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        return data.json();
      }
      data.json();
    })
    .catch((err) => console.log(err));
};

export const getProducts = async () => {
  try {
    const data = await fetch(`${API}/products?`, {
      method: "GET",
    });
    return await data.json();
  } catch (err) {
    console.log(err);
  }
};

export const getProduct = async (pid) => {
  try {
    const data = await fetch(`${API}/product/${pid}`, {
      method: "GET",
    });
    return await data.json();
  } catch (err) {
    return console.log(err);
  }
};

export const updateProduct = (pid, uid, token, product) => {
  return fetch(`${API}/product/${pid}/${uid}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",

      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
};

export const deleteProduct = (pid, uid, token) => {
  return fetch(`${API}/product/${pid}/${uid}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
};

export const updatecategory = (cid, uid, token, cate) => {

  return fetch(`${API}/category/${cid}/${uid}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(cate),
  })
    .then((data) => data.json())
    .catch((err) => console.log(err));
};

export const getcategory = (cid) => {

  return fetch(`${API}/category/${cid}`, {
    method: "GET",
  }).then(data => data.json()
  )

    .catch(err => {
      return console.log(err);
    }
    )
};