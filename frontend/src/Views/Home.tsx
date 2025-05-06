import React, { useEffect } from "react";
import "../index.scss";
import { HomeCarousel } from "./HomeCarousel";
import { handleClickApi } from "../controllers/handleClickApi";
import { Quote } from "./Quote";
import { useDispatch, useSelector } from "react-redux";
import {
  selectHomeDidMount,
  selectHomeLinkCard1,
  selectHomeLinkCard2,
  selectHomeLinkCard3,
  selectHomeTriviaCard,
} from "../modules/redux/stateSelectors";
import { set } from "../modules/redux/store";

export function Home() {
  const didMount = useSelector(selectHomeDidMount);
  // STATE VARIABLES FOR BOOTSTRAP CARDS
  let linkCard1: any = useSelector(selectHomeLinkCard1);
  let linkCard2: any = useSelector(selectHomeLinkCard2);
  let linkCard3: any = useSelector(selectHomeLinkCard3);
  let triviaCard: any = useSelector(selectHomeTriviaCard);

  const dispatch = useDispatch();

  useEffect(componentDidMount, []); // MOUNT HOOK
  useEffect(componentDidUpdate, [didMount]); // UPDATE HOOK
  useEffect(componentDidUnmount, []); // UNMOUNT HOOK

  // About Section
  const linkCardContent1 = {
    title: "About",
    desc1:
      "This is the about card of my imaginary online tea shop website. You can learn more about the different features in the project in the About section. You can get to the about section by clicking on the button below or the About tab at the top of the page.",
    desc2: "",
    desc3: "",
    link: "https://yuki-konn.github.io/capstone-level-4/about", // update link
    buttonName: "Learn More",
  };
  if (linkCard1 === "homeLinkCard1") {
    linkCard1 = (
      <article className="card">
        <div className="card-body">
          <h2 className="card-title">{linkCardContent1.title}</h2>
          <p>{linkCardContent1.desc1}</p>
          <p>{linkCardContent1.desc2}</p>
          <p>{linkCardContent1.desc3}</p>
          <a href={linkCardContent1.link}>
            <button className="cardButton btn btn-success btn-sm">
              {linkCardContent1.buttonName}
            </button>
          </a>
        </div>
      </article>
    );
  }
  // Location Section
  const linkCardContent2 = {
    title: "Locations",
    desc1:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Tempor magnis scelerisque quam turpis sem parturient. Urna elit habitasse accumsan torquent consequat consequat. Dictum ad metus phasellus magna eleifend scelerisque sem. Magna euismod aliquam finibus conubia ad. Erat adipiscing molestie; fringilla dolor nisi suscipit pulvinar pretium? Nulla class justo sapien egestas placerat! Penatibus iaculis aliquet molestie, porta pulvinar tristique. Finibus ut nullam urna quisque mi.",
    desc2:
      "Duis odio facilisi ullamcorper suspendisse a vitae nibh. Inceptos aenean egestas aenean ultrices senectus massa. Tempor aliquet eleifend non porta habitasse elementum lobortis. Curae vulputate lorem cras parturient facilisi erat proin leo. Vestibulum integer litora amet quis; torquent dolor malesuada. Maximus purus elementum, cras sodales hac semper vivamus. Augue leo ultricies hendrerit; in bibendum iaculis. Porttitor penatibus at sociosqu porta rhoncus.",
    desc3: "",
    link: "",
    buttonName: "Learn More",
  };
  if (linkCard2 === "homeLinkCard2") {
    linkCard2 = (
      <article className="card">
        <div className="card-body">
          <h2 className="card-title">{linkCardContent2.title}</h2>
          <p>{linkCardContent2.desc1}</p>
          <p>{linkCardContent2.desc2}</p>
          <p>{linkCardContent2.desc3}</p>
          <a href={linkCardContent2.link}>
            <button className="cardButton btn btn-success btn-sm">
              {linkCardContent2.buttonName}
            </button>
          </a>
        </div>
      </article>
    );
  }
  // History Section
  const linkCardContent3 = {
    title: "History",
    desc1:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vitae torquent dictum montes enim libero nec parturient, enim neque. Malesuada nullam scelerisque conubia; porttitor semper rhoncus finibus. Dui natoque volutpat sociosqu curabitur ac nulla viverra. Curae felis ultrices aliquet ante pellentesque mollis porta. Interdum nisi consequat, neque tempus orci nostra lacus litora scelerisque. Ornare viverra dolor volutpat; potenti eleifend cubilia nostra potenti.",
    desc2:
      "Blandit quam fermentum enim justo mi? Per eget sem elit erat convallis in rhoncus. Faucibus duis conubia justo sagittis conubia vulputate! Erat praesent imperdiet praesent tempus gravida, senectus auctor sagittis proin. Consectetur consequat porta fusce amet nisi et commodo. Potenti nibh risus torquent a in torquent. Habitant ultricies curae vehicula ullamcorper curae nostra. Mus nibh risus neque penatibus molestie. Consequat eget magnis vulputate aliquet est arcu.",
    desc3:
      "Volutpat suspendisse sit pharetra at ultrices risus. Nostra aliquam facilisis metus nulla inceptos. Dictum in diam feugiat hac aenean curae. Venenatis fames curae leo magna vivamus aenean aliquet mi elementum. Tellus euismod augue torquent duis hac ex suscipit netus. Condimentum potenti euismod id ornare vestibulum. Felis habitasse turpis conubia arcu maximus.",
    link: "",
    buttonName: "Learn More",
  };
  if (linkCard3 === "homeLinkCard3") {
    linkCard3 = (
      <article className="card">
        <div className="card-body">
          <h2 className="card-title">{linkCardContent3.title}</h2>
          <p>{linkCardContent3.desc1}</p>
          <p>{linkCardContent3.desc2}</p>
          <p>{linkCardContent3.desc3}</p>
          <a href={linkCardContent3.link}>
            <button className="cardButton btn btn-success btn-sm">
              {linkCardContent3.buttonName}
            </button>
          </a>
        </div>
      </article>
    );
  }
  const triviaCardContent = {
    title: "Random Trivia",
    buttonName: "Brew Question",
  };
  if (triviaCard === "homeTriviaCard") {
    triviaCard = (
      <article className="card">
        <div className="card-body">
          <h2 className="card-title">{triviaCardContent.title}</h2>
          <div id="outputTag" className="p-3"></div>
          <button
            onClick={handleClickTriviaCard}
            className="cardButton btn btn-success btn-sm"
          >
            {triviaCardContent.buttonName}
          </button>
        </div>
      </article>
    );
  }

  return (
    <main id="homeMain" className="container-lg">
      <HomeCarousel />
      <section id="sectionAbout" className="text-center m-2">
        {linkCard1}
      </section>
      <section id="sectionQuote" className="text-center m-2">
        <Quote />
      </section>
      <section id="sectionLocation" className="text-center m-2">
        {linkCard2}
      </section>
      <section id="sectionHistory" className="text-center m-2">
        {linkCard3}
      </section>
      <section id="sectionTrivia" className="text-center m-2">
        {triviaCard}
      </section>
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
          {/* <li className="list-group-item">
            <a className="no-decor" href="#sectionLocation">
              <span>Locations</span>
            </a>
          </li>
          <li className="list-group-item">
            <a className="no-decor" href="#sectionHistory">
              <span>History</span>
            </a>
          </li> */}
          <li className="list-group-item">
            <a className="no-decor" href="#sectionTrivia">
              <span>Trivia</span>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );

  // MOUNT PHASE
  function componentDidMount() {
    document.title = "Yuki Tea Shop";
    console.log("The Home component has mounted.");

    let action = set.homeDidMount(true);
    dispatch(action);

    action = set.homeLinkCard1("homeLinkCard1");
    dispatch(action);

    action = set.homeLinkCard2("homeLinkCard2");
    dispatch(action);

    action = set.homeLinkCard3("homeLinkCard3");
    dispatch(action);

    action = set.homeTriviaCard("homeTriviaCard");
    dispatch(action);
  }
  //

  // HANDLER FOR TRIVIA CARD BUTTON
  function handleClickTriviaCard(event: any) {
    handleClickApi(event);
  }

  // UPDATE PHASE
  function componentDidUpdate() {
    if (didMount) {
      console.log("The Home component has updated.");
    }
  }
}

// UNMOUNT PHASE
function componentDidUnmount() {
  // - TO UNMOUNT REACT REQUIRES YOU TO RETURN A CALLBACK.
  // - A CONDITION CAN ALSO CAUSE A COMPONENT TO UNMOUNT.
  return function () {
    console.log("The Home component has unmounted.");
  };
}
