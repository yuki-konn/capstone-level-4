import React from "react";
import { useSelector } from "react-redux";
import { selectCartCountArray } from "../modules/redux/stateSelectors";

export function Cart() {
  const cartCount = useSelector(selectCartCountArray);
  return (
    <>
      <div id="sectionCartArea" className="row row-cols-lg-5">
        <div id="cart1" className="col-12 col-md-6 border border-black rounded">
          <h4>Black Tea</h4>
          <p>
            <b>Quantity: {cartCount[0]}</b>
          </p>
        </div>
        <div id="cart2" className="col-12 col-md-6 border border-black rounded">
          <h4>Green Tea</h4>
          <p>
            <b>Quantity: {cartCount[1]}</b>
          </p>
        </div>
        <div id="cart3" className="col-12 col-md-6 border border-black rounded">
          <h4>White Tea</h4>
          <p>
            <b>Quantity: {cartCount[2]}</b>
          </p>
        </div>
        <div id="cart4" className="col-12 col-md-6 border border-black rounded">
          <h4>Oolong Tea</h4>
          <p>
            <b>Quantity: {cartCount[3]}</b>
          </p>
        </div>
        <div id="cart5" className="col-12 col-md-6 border border-black rounded">
          <h4>Pu-erh Tea</h4>
          <p>
            <b>Quantity: {cartCount[4]}</b>
          </p>
        </div>
        <div id="cart6" className="col-12 col-md-6 border border-black rounded">
          <h4>Purple Tea</h4>
          <p>
            <b>Quantity: {cartCount[5]}</b>
          </p>
        </div>
        <div id="cart7" className="col-12 col-md-6 border border-black rounded">
          <h4>Matcha Tea</h4>
          <p>
            <b>Quantity: {cartCount[6]}</b>
          </p>
        </div>
        <div id="cart8" className="col-12 col-md-6 border border-black rounded">
          <h4>Mate Tea</h4>
          <p>
            <b>Quantity: {cartCount[7]}</b>
          </p>
        </div>
        <div id="cart9" className="col-12 col-md-6 border border-black rounded">
          <h4>Herbal Tea</h4>
          <p>
            <b>Quantity: {cartCount[8]}</b>
          </p>
        </div>
        <div
          id="cart10"
          className="col-12 col-md-6 border border-black rounded"
        >
          <h4>Rooibos Tea</h4>
          <p>
            <b>Quantity: {cartCount[9]}</b>
          </p>
        </div>
      </div>
    </>
  );
}
