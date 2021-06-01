

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Base from "../core/Base";
import { getallCategory, } from "./helper/adminapicall";

const ManageCategory = () => {
    const [category, setCategory] = useState([]);


    const preload = () => {
        getallCategory()
            .then((data) => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    setCategory(data);
                }
            })
            .catch((e) => console.log(e));
    };
    useEffect(() => {
        preload();
    }, []);


    return (
        <Base title="Welcome admin" description="Manage Categories here">
            <h2 className="mb-4">All products:</h2>
            <Link className="btn btn-info" to={`/admin/dashboard`}>
                <span className="">Admin Home</span>
            </Link>
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center text-white my-3">
                        Total {category.length} categories
          </h2>
                    {category &&
                        category.map((cat, inde) => (
                            <React.Fragment key={inde}>
                                <div className="row text-center mb-2 ">
                                    <div className="col-6">
                                        <h3 className="text-white text-left">{cat.name}</h3>
                                    </div>
                                    <div className="col-6">
                                        <Link
                                            className="btn btn-success"
                                            to={`/admin/category/update/${cat._id}`}
                                        >
                                            <span className="">Update</span>
                                        </Link>
                                    </div>

                                </div>
                            </React.Fragment>
                        ))}
                </div>
            </div>
        </Base>
    );
};


export default ManageCategory;
