import React, { useEffect, useState } from "react";
import { handleClickAddCart } from "../controllers/handleClickAddCart";
import { teaCards } from "../modules/Shop/teaCards";
// import { createRows } from "../modules/Shop/createRows.js";
// import { Column } from "../utils/Column.js";
// import { GridSystem } from "../utils/GridSystem.js";
// import { ShopCard } from "../modules/Shop/ShopCard";
import "./Shop.scss";

export function Shop() {
  const [didMount, setDidMount] = useState(false);
  const [sectionTeaContent, setSectionTeaContent] = useState(<></>);
  // const [card, setCard] = useState(<></>);
  useEffect(componentDidMount, []); // MOUNT HOOK
  useEffect(componentDidUpdate, [didMount]); // UPDATE HOOK
  useEffect(componentDidUnmount, []); // UNMOUNT HOOK

  return (
    <main id="shopMain" className="container-lg">
      <section className="m-1" id="sectionTea">
        <h2 className="text-center m-2 fw-bold border border-3 border-success bg-warning">
          Products
        </h2>
        {sectionTeaContent}
        {/* {card} */}
      </section>
      <br />
      <section id="sectionCart">
        <div className="container-fluid">
          <div id="sectionCartTitle" className="row">
            <div className="col-12">
              <h2 className="text-center m-2 fw-bold border border-3 border-success bg-warning">
                Items in Cart
              </h2>
            </div>
          </div>
          <div id="sectionCartArea" className="row row-cols-lg-5">
            <div id="cart1" className="col-12 col-md-6">
              <h4>Black Tea</h4>
              <br />
              <button id="addCartButton1" onClick={handleClick}>
                <i className="bi bi-cart-plus-fill"></i> Add to Cart
              </button>
            </div>
            <div id="cart2" className="col-12 col-md-6">
              <h4>Green Tea</h4>
              <br />
              <button id="addCartButton2" onClick={handleClick}>
                <i className="bi bi-cart-plus-fill"></i> Add to Cart
              </button>
            </div>
            <div id="cart3" className="col-12 col-md-6">
              <h4>White Tea</h4>
              <br />
              <button id="addCartButton3" onClick={handleClick}>
                <i className="bi bi-cart-plus-fill"></i> Add to Cart
              </button>
            </div>
            <div id="cart4" className="col-12 col-md-6">
              <h4>Oolong Tea</h4>
              <span className="badge bg-info col-12">50% OFF SUMMER SALE</span>
              <button id="addCartButton4" onClick={handleClick}>
                <i className="bi bi-cart-plus-fill"></i> Add to Cart
              </button>
            </div>
            <div id="cart5" className="col-12 col-md-6">
              <h4>Pu-erh Tea</h4>
              <span className="badge bg-info col-12">50% OFF SUMMER SALE</span>
              <button id="addCartButton5" onClick={handleClick}>
                <i className="bi bi-cart-plus-fill"></i> Add to Cart
              </button>
            </div>

            <div id="cart6" className="col-12 col-md-6">
              <h4>Purple Tea</h4>
              <br />
              <button id="addCartButton6" onClick={handleClick}>
                <i className="bi bi-cart-plus-fill"></i> Add to Cart
              </button>
            </div>
            <div id="cart7" className="col-12 col-md-6">
              <h4>Matcha Tea</h4>
              <br />
              <button id="addCartButton7" onClick={handleClick}>
                <i className="bi bi-cart-plus-fill"></i> Add to Cart
              </button>
            </div>
            <div id="cart8" className="col-12 col-md-6">
              <h4>Mate Tea</h4>
              <br />
              <button id="addCartButton8" onClick={handleClick}>
                <i className="bi bi-cart-plus-fill"></i> Add to Cart
              </button>
            </div>
            <div id="cart9" className="col-12 col-md-6">
              <h4>Herbal Tea</h4>
              <span className="badge bg-info col-12">50% OFF SUMMER SALE</span>
              <button id="addCartButton9" onClick={handleClick}>
                <i className="bi bi-cart-plus-fill"></i> Add to Cart
              </button>
            </div>
            <div id="cart10" className="col-12 col-md-6">
              <h4>Rooibos Tea</h4>
              <br />
              <button id="addCartButton10" onClick={handleClick}>
                <i className="bi bi-cart-plus-fill"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );

  // MOUNT PHASE
  function componentDidMount() {
    document.title = "Yuki Tea Shop | SHOP";

    setSectionTeaContent(
      <div className="container-fluid">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5">
          <div className="col">
            <article className="card border border-success border-2">
              <img
                className="card-img-top"
                id={teaCards[0].id}
                src={teaCards[0].src}
                data-bs-title={teaCards[0].tooltipTitle}
                data-bs-toggle="tooltip"
              />
              <div className="card-body">
                <h3 className="card-title">{teaCards[0].title}</h3>
                {teaCards[0].description}
              </div>
            </article>
          </div>
          <div className="col">
            <article className="card border border-success border-2">
              <img
                className="card-img-top"
                id={teaCards[1].id}
                src={teaCards[1].src}
                data-bs-title={teaCards[1].tooltipTitle}
                data-bs-toggle="tooltip"
              />
              <div className="card-body">
                <h3 className="card-title">{teaCards[1].title}</h3>
                {teaCards[1].description}
              </div>
            </article>
          </div>
          <div className="col">
            <article className="card border border-success border-2">
              <img
                className="card-img-top"
                id={teaCards[2].id}
                src={teaCards[2].src}
                data-bs-title={teaCards[2].tooltipTitle}
                data-bs-toggle="tooltip"
              />
              <div className="card-body">
                <h3 className="card-title">{teaCards[2].title}</h3>
                {teaCards[2].description}
              </div>
            </article>
          </div>
          <div className="col">
            <article className="card border border-success border-2">
              <img
                className="card-img-top"
                id={teaCards[3].id}
                src={teaCards[3].src}
                data-bs-title={teaCards[3].tooltipTitle}
                data-bs-toggle="tooltip"
              />
              <div className="card-body">
                <h3 className="card-title">{teaCards[3].title}</h3>
                {teaCards[3].description}
              </div>
            </article>
          </div>
          <div className="col">
            <article className="card border border-success border-2">
              <img
                className="card-img-top"
                id={teaCards[4].id}
                src={teaCards[4].src}
                data-bs-title={teaCards[4].tooltipTitle}
                data-bs-toggle="tooltip"
              />
              <div className="card-body">
                <h3 className="card-title">{teaCards[4].title}</h3>
                {teaCards[4].description}
              </div>
            </article>
          </div>
          <div className="col">
            <article className="card border border-success border-2">
              <img
                className="card-img-top"
                id={teaCards[5].id}
                src={teaCards[5].src}
                data-bs-title={teaCards[5].tooltipTitle}
                data-bs-toggle="tooltip"
              />
              <div className="card-body">
                <h3 className="card-title">{teaCards[5].title}</h3>
                {teaCards[5].description}
              </div>
            </article>
          </div>
          <div className="col">
            <article className="card border border-success border-2">
              <img
                className="card-img-top"
                id={teaCards[6].id}
                src={teaCards[6].src}
                data-bs-title={teaCards[6].tooltipTitle}
                data-bs-toggle="tooltip"
              />
              <div className="card-body">
                <h3 className="card-title">{teaCards[6].title}</h3>
                {teaCards[6].description}
              </div>
            </article>
          </div>
          <div className="col">
            <article className="card border border-success border-2">
              <img
                className="card-img-top"
                id={teaCards[7].id}
                src={teaCards[7].src}
                data-bs-title={teaCards[7].tooltipTitle}
                data-bs-toggle="tooltip"
              />
              <div className="card-body">
                <h3 className="card-title">{teaCards[7].title}</h3>
                {teaCards[7].description}
              </div>
            </article>
          </div>
          <div className="col">
            <article className="card border border-success border-2">
              <img
                className="card-img-top"
                id={teaCards[8].id}
                src={teaCards[8].src}
                data-bs-title={teaCards[8].tooltipTitle}
                data-bs-toggle="tooltip"
              />
              <div className="card-body">
                <h3 className="card-title">{teaCards[8].title}</h3>
                {teaCards[8].description}
              </div>
            </article>
          </div>
          <div className="col">
            <article className="card border border-success border-2">
              <img
                className="card-img-top"
                id={teaCards[9].id}
                src={teaCards[9].src}
                data-bs-title={teaCards[9].tooltipTitle}
                data-bs-toggle="tooltip"
              />
              <div className="card-body">
                <h3 className="card-title">{teaCards[9].title}</h3>
                {teaCards[9].description}
              </div>
            </article>
          </div>
        </div>
      </div>
    );

    // CONVERTS CARD ARRAY POSITIONS TO CARDS, THEN ADDS THEM TO COLUMN GROUPS.

    // let position = 0;
    // const groupColumns = [];
    // do {
    //   for (let count = 0; count < teaCards.length; count++) {
    //     const teaCardProps = teaCards[position];
    //     debugger;
    //     const shopCard = new ShopCard(teaCardProps);
    //     const column = new Column(shopCard);
    //     groupColumns.push(column);
    //     position++;
    //   }
    //   // groupColumns.push(columns);
    // } while (position < teaCards.length);

    // const rows = createRows(groupColumns);
    // const gridContainer = new GridSystem();
    // gridContainer.addRow(rows);
    // debugger;
    // setCard(gridContainer); MR. Rolazar said he will teach later.
    // debugger;

    setDidMount(true);
    console.log("The Shop component has mounted.");
  }

  // UPDATE PHASE
  function componentDidUpdate() {
    if (didMount) {
      console.log("The Shop component has updated.");
      // BOOTSTRAP TOOLTIPS
      const img1 = document.getElementById("img1");
      new bootstrap.Tooltip(img1);
      const img2 = document.getElementById("img2");
      new bootstrap.Tooltip(img2);
      const img3 = document.getElementById("img3");
      new bootstrap.Tooltip(img3);
      const img4 = document.getElementById("img4");
      new bootstrap.Tooltip(img4);
      const img5 = document.getElementById("img5");
      new bootstrap.Tooltip(img5);
      const img6 = document.getElementById("img6");
      new bootstrap.Tooltip(img6);
      const img7 = document.getElementById("img7");
      new bootstrap.Tooltip(img7);
      const img8 = document.getElementById("img8");
      new bootstrap.Tooltip(img8);
      const img9 = document.getElementById("img9");
      new bootstrap.Tooltip(img9);
      const img10 = document.getElementById("img10");
      new bootstrap.Tooltip(img10);
    }
  }
}

// UNMOUNT PHASE
function componentDidUnmount() {
  return function () {
    console.log("The Shop component has unmounted.");
  };
}

// PASSES PARAMETER TO A MORE SPECIFIC HANDLER
function handleClick(event) {
  let buttonId = event.target.id; // GETS THE ID OF BUTTON THATS CLICKED. USED THIS INSTEAD OF getElementById BECAUSE I WANTED EACH BUTTON TO GIVE ME A DIFFERENT ID.
  handleClickAddCart(event, buttonId);
}
