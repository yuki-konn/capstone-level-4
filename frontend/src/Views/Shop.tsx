import React, { JSX, useEffect } from "react";
import "./Shop.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  // selectCartCountArray,
  selectShopBlackTeaCard,
  selectShopDidMount,
  selectShopGreenTeaCard,
  selectShopHerbalTeaCard,
  selectShopMatchaTeaCard,
  selectShopMateTeaCard,
  selectShopOolongTeaCard,
  selectShopPuerhTeaCard,
  selectShopPurpleTeaCard,
  selectShopRooibosTeaCard,
  selectShopSectionTeaContent,
  selectShopWhiteTeaCard,
} from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";
import { ShopCard } from "../modules/Shop/ShopCard";
import { Cart } from "./Cart";

export function Shop() {
  const didMount = useSelector(selectShopDidMount);
  let sectionTeaContent: any = useSelector(selectShopSectionTeaContent);
  // TeaCard Selectors
  let blackTeaCard: any = useSelector(selectShopBlackTeaCard);
  let greenTeaCard: any = useSelector(selectShopGreenTeaCard);
  let whiteTeaCard: any = useSelector(selectShopWhiteTeaCard);
  let oolongTeaCard: any = useSelector(selectShopOolongTeaCard);
  let puerhTeaCard: any = useSelector(selectShopPuerhTeaCard);
  let purpleTeaCard: any = useSelector(selectShopPurpleTeaCard);
  let matchaTeaCard: any = useSelector(selectShopMatchaTeaCard);
  let mateTeaCard: any = useSelector(selectShopMateTeaCard);
  let herbalTeaCard: any = useSelector(selectShopHerbalTeaCard);
  let rooibosTeaCard: any = useSelector(selectShopRooibosTeaCard);
  // let quantity: Array<number> = useSelector(selectCartCountArray);

  useEffect(componentDidMount, []); // MOUNT HOOK
  useEffect(componentDidUpdate, [didMount]); // UPDATE HOOK
  useEffect(componentDidUnmount, []); // UNMOUNT HOOK

  const dispatch = useDispatch();

  blackTeaCard = getTeaCard(blackTeaCard);
  greenTeaCard = getTeaCard(greenTeaCard);
  whiteTeaCard = getTeaCard(whiteTeaCard);
  oolongTeaCard = getTeaCard(oolongTeaCard);
  puerhTeaCard = getTeaCard(puerhTeaCard);
  purpleTeaCard = getTeaCard(purpleTeaCard);
  matchaTeaCard = getTeaCard(matchaTeaCard);
  mateTeaCard = getTeaCard(mateTeaCard);
  herbalTeaCard = getTeaCard(herbalTeaCard);
  rooibosTeaCard = getTeaCard(rooibosTeaCard);

  if (sectionTeaContent === "sectionTeaContent") {
    sectionTeaContent = (
      <div className="container-fluid">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5">
          <div className="col">
            {blackTeaCard}
            {/* <div>
              <button
                onClick={handleClick1(0) as any}
                className="btn btn-sm border-black bg-success"
              >
                +
              </button>
              <span className="text-black">
                <i className="bi bi-cart fs-4"></i>
              </span>
              <button
                // onClick={handleClick2(0) as any}
                className="btn btn-sm border-black bg-danger"
              >
                -
              </button>
            </div> */}
          </div>
          <div className="col">{greenTeaCard}</div>
          <div className="col">{whiteTeaCard}</div>
          <div className="col">{oolongTeaCard}</div>
          <div className="col">{puerhTeaCard}</div>
          <div className="col">{purpleTeaCard}</div>
          <div className="col">{matchaTeaCard}</div>
          <div className="col">{mateTeaCard}</div>
          <div className="col">{herbalTeaCard}</div>
          <div className="col">{rooibosTeaCard}</div>
        </div>
      </div>
    );
  }

  return (
    <main id="shopMain" className="container-lg">
      <section id="sectionCart">
        <div className="container-fluid">
          <div id="sectionCartTitle" className="row">
            <div className="col-12">
              <h2 className="text-center m-2 fw-bold border border-3 border-success bg-warning">
                Items in Cart
              </h2>
            </div>
          </div>
          <Cart />
        </div>
      </section>
      <br />
      <section className="m-1" id="sectionTea">
        <h2 className="text-center m-2 fw-bold border border-3 border-success bg-warning">
          Products
        </h2>
        {sectionTeaContent}
      </section>

      {/* OLD ITEMS IN CART SECTION */}
      {/* <section id="sectionCart">
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
      </section> */}
    </main>
  );

  // function handleClick1(position: number) {
  //   if (position === 0) {
  //     let action = set.cartCountArray(quantity[0] + 1);
  //     debugger;
  //     dispatch(action);
  //   }
  // }
  // function handleClick2() {}

  // MOUNT PHASE
  function componentDidMount() {
    document.title = "Yuki Tea Shop | SHOP";
    console.log("The Shop component has mounted.");

    let action = set.shopDidMount(true);
    dispatch(action);

    action = set.shopBlackTeaCard("blackTeaCard");
    dispatch(action);
    action = set.shopGreenTeaCard("greenTeaCard");
    dispatch(action);
    action = set.shopWhiteTeaCard("whiteTeaCard");
    dispatch(action);
    action = set.shopOolongTeaCard("oolongTeaCard");
    dispatch(action);
    action = set.shopPuerhTeaCard("puerhTeaCard");
    dispatch(action);
    action = set.shopPurpleTeaCard("purpleTeaCard");
    dispatch(action);
    action = set.shopMatchaTeaCard("matchaTeaCard");
    dispatch(action);
    action = set.shopMateTeaCard("mateTeaCard");
    dispatch(action);
    action = set.shopHerbalTeaCard("herbalTeaCard");
    dispatch(action);
    action = set.shopRooibosTeaCard("rooibosTeaCard");
    dispatch(action);

    action = set.shopSectionTeaContent("sectionTeaContent");
    dispatch(action);
  }

  // UPDATE PHASE
  function componentDidUpdate() {
    if (didMount) {
      console.log("The Shop component has updated.");
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
  // UNMOUNT PHASE
  function componentDidUnmount() {
    return function () {
      console.log("The Shop component has unmounted.");
      let action = set.shopDidMount(false);
      dispatch(action);
    };
  }
}

// PASSES PARAMETER TO A MORE SPECIFIC HANDLER
// function handleClick(event: any) {
//   let buttonId = event.target.id; // GETS THE ID OF BUTTON THATS CLICKED. USED THIS INSTEAD OF getElementById BECAUSE I WANTED EACH BUTTON TO GIVE ME A DIFFERENT ID.
//   handleClickAddCart(event, buttonId);
// }

// FOR NON-SERIALIZABLE STATES
function getTeaCard(card: string): JSX.Element | string {
  let blackTeaCard = "";
  let greenTeaCard = "";
  let whiteTeaCard = "";
  let oolongTeaCard = "";
  let puerhTeaCard = "";
  let purpleTeaCard = "";
  let matchaTeaCard = "";
  let mateTeaCard = "";
  let herbalTeaCard = "";
  let rooibosTeaCard = "";
  // ShopCard Class
  if (card === "blackTeaCard") {
    const blackTea = new ShopCard(0);
    blackTeaCard = blackTea.cardContent;
    return blackTeaCard;
  }
  if (card === "greenTeaCard") {
    const greenTea = new ShopCard(1);
    greenTeaCard = greenTea.cardContent;
    return greenTeaCard;
  }
  if (card === "whiteTeaCard") {
    const whiteTea = new ShopCard(2);
    whiteTeaCard = whiteTea.cardContent;
    return whiteTeaCard;
  }
  if (card === "oolongTeaCard") {
    const oolongTea = new ShopCard(3);
    oolongTeaCard = oolongTea.cardContent;
    return oolongTeaCard;
  }
  if (card === "puerhTeaCard") {
    const puerhTea = new ShopCard(4);
    puerhTeaCard = puerhTea.cardContent;
    return puerhTeaCard;
  }
  if (card === "purpleTeaCard") {
    const purpleTea = new ShopCard(5);
    purpleTeaCard = purpleTea.cardContent;
    return purpleTeaCard;
  }
  if (card === "matchaTeaCard") {
    const matchaTea = new ShopCard(6);
    matchaTeaCard = matchaTea.cardContent;
    return matchaTeaCard;
  }
  if (card === "mateTeaCard") {
    const mateTea = new ShopCard(7);
    mateTeaCard = mateTea.cardContent;
    return mateTeaCard;
  }
  if (card === "herbalTeaCard") {
    const herbalTea = new ShopCard(8);
    herbalTeaCard = herbalTea.cardContent;
    return herbalTeaCard;
  }
  if (card === "rooibosTeaCard") {
    const rooibosTea = new ShopCard(9);
    rooibosTeaCard = rooibosTea.cardContent;
    return rooibosTeaCard;
  }
}
