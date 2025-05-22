import React, { JSX, useEffect } from "react";
import "../index.scss";
import { HomeCarousel } from "./HomeCarousel";
import { useDispatch, useSelector } from "react-redux";
import {
  selectHomeDidMount,
  selectHomeLinkCard1,
  selectHomeLinkCard2,
  selectHomeLinkCard3,
  // selectHomeTriviaCard,
} from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";
import { LinkCard } from "../modules/LinkCard";
// import { TriviaCard } from "../modules/TriviaCard";

export function Home() {
  const didMount = useSelector(selectHomeDidMount);
  let aboutLinkCard: any = useSelector(selectHomeLinkCard1);
  let locationLinkCard: any = useSelector(selectHomeLinkCard2);
  let historyLinkCard: any = useSelector(selectHomeLinkCard3);
  // let triviaCard: any = useSelector(selectHomeTriviaCard);

  const dispatch = useDispatch();

  useEffect(componentDidMount, []);
  useEffect(componentDidUpdate, [didMount]);
  useEffect(componentDidUnmount, []);

  aboutLinkCard = getCard(aboutLinkCard);
  locationLinkCard = getCard(locationLinkCard);
  historyLinkCard = getCard(historyLinkCard);
  // triviaCard = getCard(triviaCard);

  return (
    <main id="homeMain" className="container-lg">
      <HomeCarousel />
      <section id="sectionAbout" className="text-center m-2">
        {aboutLinkCard}
      </section>
      <section id="sectionLocation" className="text-center m-2">
        {locationLinkCard}
      </section>
      <section id="sectionHistory" className="text-center m-2">
        {historyLinkCard}
      </section>
      {/* <section id="sectionTrivia" className="text-center m-2">
        {triviaCard}
      </section> */}
      <br />
      <div id="siteMapGroup" className="m-1">
        <span className="fw-bold p-0 m-0">
          <u style={{ color: "green" }}>Sitemap</u>
        </span>
        <ul className="list-group p-1">
          <li className="list-group-item">
            <a className="no-decor" href="#sectionAbout">
              <span>About</span>
            </a>
          </li>
          <li className="list-group-item">
            <a className="no-decor" href="#sectionLocation">
              <span>Locations</span>
            </a>
          </li>
          <li className="list-group-item">
            <a className="no-decor" href="#sectionHistory">
              <span>History</span>
            </a>
          </li>
          {/* <li className="list-group-item">
            <a className="no-decor" href="#sectionTrivia">
              <span>Trivia</span>
            </a>
          </li> */}
        </ul>
      </div>
    </main>
  );

  function componentDidMount() {
    document.title = "Yuki Tea Shop";
    console.log("The Home component has mounted.");

    let action = set.homeDidMount(true);
    dispatch(action);

    action = set.homeLinkCard1("aboutLinkCard");
    dispatch(action);

    action = set.homeLinkCard2("locationLinkCard");
    dispatch(action);

    action = set.homeLinkCard3("historyLinkCard");
    dispatch(action);

    action = set.homeTriviaCard("triviaCard");
    dispatch(action);
  }

  function componentDidUpdate() {
    if (didMount) {
      console.log("The Home component has updated.");
    }
  }

  function componentDidUnmount() {
    // - TO UNMOUNT REACT REQUIRES YOU TO RETURN A CALLBACK.
    // - A CONDITION CAN ALSO CAUSE A COMPONENT TO UNMOUNT.
    return function () {
      console.log("The Home component has unmounted.");
      let action = set.homeDidMount(false);
      dispatch(action);
    };
  }
}

function getCard(card: string): JSX.Element | string {
  let aboutLinkCard = "";
  let locationLinkCard = "";
  let historyLinkCard = "";
  // let triviaCard = "";
  // LinkCard Class
  if (card === "aboutLinkCard") {
    const aboutCard = new LinkCard(0);
    aboutLinkCard = aboutCard.cardContent;
    return aboutLinkCard;
  }
  if (card === "locationLinkCard") {
    const locationCard = new LinkCard(1);
    locationLinkCard = locationCard.cardContent;
    return locationLinkCard;
  }
  if (card === "historyLinkCard") {
    const historyCard = new LinkCard(2);
    historyLinkCard = historyCard.cardContent;
    return historyLinkCard;
  }
  // TriviaCard Class
  // if (card === "triviaCard") {
  //   const triviaCardObj = new TriviaCard();
  //   triviaCard = triviaCardObj.cardContent;
  //   return triviaCard;
  // }
}
