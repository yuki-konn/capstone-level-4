import React, { useEffect } from "react";
import oolongtea from "../../assets/images/oolongtea.png";
import puerhtea from "../../assets/images/puerhtea.png";
import herbaltea from "../../assets/images/herbaltea.png";
import "../index.scss";
import "./HomeCarousel.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectHomeCarouselDidMount } from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";

export function HomeCarousel() {
  const imgStyle = {
    maxHeight: "30%",
    margin: "auto",
    display: "flex",
  };
  const didMount = useSelector(selectHomeCarouselDidMount);
  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  return (
    <div className="row">
      <div className="col m-2">
        <h3 className="text-center bg-warning">Featured Products</h3>
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
              <div className="carousel-caption d-none d-md-block carouselCaption">
                <div className="row">
                  <div className="col">
                    <h5 className="captionTitle">Oolong Tea</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p className="captionDescription">
                      Benefits: Lowers cholesterol, aiding in weight loss,
                      supports dental health.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                style={imgStyle}
                src={puerhtea}
                className="d-block"
                alt="puerh"
              />
              <div className="carousel-caption d-none d-md-block carouselCaption">
                <div className="row">
                  <div className="col">
                    <h5 className="captionTitle">Pu-erh Tea</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p className="captionDescription">
                      Benefits: Improves digestion, reduces anxiety, and has
                      many antioxidants.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                style={imgStyle}
                src={herbaltea}
                className="d-block"
                alt="herbal"
              />
              <div className="carousel-caption d-none d-md-block carouselCaption">
                <div className="row">
                  <div className="col">
                    <h5 className="captionTitle">Herbal Tea</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p className="captionDescription">
                      Benefits: Helps with relaxation, immune system support,
                      and heart health.
                    </p>
                  </div>
                </div>
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
    console.log("HomeCarousel Component: Mount Phase");
    let action = set.homeCarouselDidMount(true);
    dispatch(action);
  }

  function componentDidUpdate() {
    if (didMount) {
      console.log("HomeCarousel Component: Update Phase");
    }
  }
  function componentDidUnmount() {
    return function () {
      console.log("HomeCarousel Component: Unmount Phase");
      let action = set.homeCarouselDidMount(false);
      dispatch(action);
    };
  }
}
