import React from "react";
import Menu from "./nav";
import "./CSS/home.css";
const Base = ({
  title = "",
  description = "Want Sugar RUSH !! ",
  className = "mt-5 pt-3",
  icon = "",
  children,
}) => {
  return (
    <div>
      <Menu />

      <div className={className}>{children}</div>

      <div
        class="text-center text-white  "
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          background: "#FF6666",
        }}
      >
        <div class="container pt-1  ">
          <section class="mb-1  ">
            <a
              class="btn text-white"
              href="https://www.facebook.com/prateekRai7677/"
              role="button"
              target="_blank"
            >
              <i class="bi bi-facebook fs-3"></i>
            </a>

            <a
              class="btn text-white fs-3 "
              href="https://www.twitter.com/Prateek__py/"
              role="button"
              target="_blank"
            >
              <i class="bi bi-twitter"></i>
            </a>

            <a
              class="btn text-white fs-3"
              href="https://www.instagram.com/prateek.py/"
              role="button"
              target="_blank"
            >
              <i class="bi bi-instagram"></i>
            </a>

            <a
              class="btn text-white fs-3"
              href="https://www.linkedin.com/in/prateek-rai-a58848153/"
              role="button"
              target="_blank"
            >
              <i class="bi bi-linkedin"></i>
            </a>

            <a
              class="btn text-white fs-3"
              href="https://github.com/HeapOwl"
              role="button"
              target="_blank"
            >
              <i class="bi bi-github"></i>
            </a>
          </section>
        </div>
      </div>
    </div>

    // {/* <footer className="footer mt-3 bg-dark">
    //   <div className="container-fluid bg-success text-white text-center py-3">
    //     <h4>feel free to reach us</h4>
    //     <button className="btn btn-lg btn-warning"> contact Us</button>
    //   </div>
    //   <div className="container">
    //     <span className="text-muted">An amazing thing to buy Product</span>
    //   </div>
    // </footer> */}
  );
};

export default Base;
