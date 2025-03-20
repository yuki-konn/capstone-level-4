import React, { useEffect, useState } from "react";
import oolongtea from "../../assets/images/oolongtea.png";
import puerhtea from "../../assets/images/puerhtea.png";
import herbaltea from "../../assets/images/herbaltea.png";
import "../index.scss";

export function HomeCarousel() {
  const goldcolor = {
    color: "#FFB302",
  };
  const imgStyle = {
    maxHeight: "30%",
    margin: "auto",
    display: "flex",
  };
  const [didMount, setDidMount] = useState(false);
  useEffect(componentDidMount, []); // MOUNT PHASE
  useEffect(componentDidUpdate); // UPDATE PHASE

  return (
    <div className="row">
      <div className="col ">
        <h3 className="m-2 text-center bg-warning">Summer Sale 50% off</h3>
        <div
          id="homeCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                style={imgStyle}
                src={oolongtea}
                className="d-block"
                alt="oolong"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={goldcolor}>Oolong Tea</h5>
                <p style={goldcolor}>
                  Benefits: Lowers cholesterol, aiding in weight loss, supports
                  dental health.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                style={imgStyle}
                src={puerhtea}
                className="d-block"
                alt="puerh"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={goldcolor}>Pu-erh Tea</h5>
                <p style={goldcolor}>
                  Benefits: Improves digestion, reduces anxiety, and has many
                  antioxidants.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                style={imgStyle}
                src={herbaltea}
                className="d-block"
                alt="herbal"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 style={goldcolor}>Herbal Tea</h5>
                <p style={goldcolor}>
                  Benefits: Helps with relaxation, immune system support, and
                  heart health.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="prev"
            title="Previous"
            data-bs-toggle="tooltip"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="next"
            title="Next"
            data-bs-toggle="tooltip"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );

  function componentDidMount() {
    console.log("HomeCarousel: Mount Phase");
    setDidMount(true);
  }

  function componentDidUpdate() {
    if (didMount) {
      console.log("HomeCarousel: Update Phase");
    }
  }
}
