import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./core/Home";

import Cart from "./core/Cart";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import AdminRoute from "./auth/helper/AdminRoutes";
import UserDashboard from "./user/UserDashBoard";
import AdminDashboard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import ManageCategory from "./admin/ManageCategory";
import UpdateCategory from "./admin/UpdateCategory";
import Landing from "./core/Landing";
const Routes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/shop" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/cart" exact component={Cart} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute
          path="/admin/create/category"
          exact
          component={AddCategory}
        />
        <AdminRoute path="/admin/create/product" exact component={AddProduct} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute path="/admin/categories" exact component={ManageCategory} />
        <AdminRoute
          path="/admin/category/update/:catId"
          exact
          component={UpdateCategory}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
