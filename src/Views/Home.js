import React, { useEffect, useState } from "react";
import "../index.scss";
import { HomeCarousel } from "./HomeCarousel";
import { handleClickApi } from "../controllers/handleClickApi";

export function Home() {
  // STATE VARIABLES FOR CARDS
  // USESTATE RETURNS A ARRAY WITH 2 ITEMS.
  const [linkCard1, setLinkCard1] = useState(<></>);
  const [linkCard2, setLinkCard2] = useState(<></>);
  const [linkCard3, setLinkCard3] = useState(<></>);
  const [triviaCard, setTriviaCard] = useState(<></>);

  // DESTRUCTURING: SYNTAX THAT IMMEDIATELY EXTRACTS THE VALUE AND SETTER OF A TUPLE.
  const [didMount, setDidMount] = useState(false);

  useEffect(componentDidMount, []); // MOUNT HOOK
  useEffect(componentDidUpdate, [didMount]); // UPDATE HOOK
  useEffect(componentDidUnmount, []); // UNMOUNT HOOK

  return (
    <main id="homeMain" className="container-lg">
      <HomeCarousel />
      <section id="sectionAbout" className="text-center m-2">
        {linkCard1}
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

    // SECTION ABOUT
    const linkCard1 = {
      title: "About",
      desc1:
        "This is the about card of my imaginary online tea shop website. You can learn more about the different features in the project in the About section. You can get to the about section by clicking on the button below or the About tab at the top of the page.",
      desc2: "",
      desc3: "",
      link: "https://yuki-konn.github.io/capstone-project-level-3/about", // update link
      buttonName: "Learn More",
    };

    setLinkCard1(
      <article className="card">
        <div className="card-body">
          <h2 className="card-title">{linkCard1.title}</h2>
          <p>{linkCard1.desc1}</p>
          <p>{linkCard1.desc2}</p>
          <p>{linkCard1.desc3}</p>
          <a href={linkCard1.link}>
            <button className="cardButton btn btn-success btn-sm">
              {linkCard1.buttonName}
            </button>
          </a>
        </div>
      </article>
    );

    // SECTION LOCATIONS
    const linkCard2 = {
      title: "Locations",
      desc1:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Tempor magnis scelerisque quam turpis sem parturient. Urna elit habitasse accumsan torquent consequat consequat. Dictum ad metus phasellus magna eleifend scelerisque sem. Magna euismod aliquam finibus conubia ad. Erat adipiscing molestie; fringilla dolor nisi suscipit pulvinar pretium? Nulla class justo sapien egestas placerat! Penatibus iaculis aliquet molestie, porta pulvinar tristique. Finibus ut nullam urna quisque mi.",
      desc2:
        "Duis odio facilisi ullamcorper suspendisse a vitae nibh. Inceptos aenean egestas aenean ultrices senectus massa. Tempor aliquet eleifend non porta habitasse elementum lobortis. Curae vulputate lorem cras parturient facilisi erat proin leo. Vestibulum integer litora amet quis; torquent dolor malesuada. Maximus purus elementum, cras sodales hac semper vivamus. Augue leo ultricies hendrerit; in bibendum iaculis. Porttitor penatibus at sociosqu porta rhoncus.",
      desc3: "",
      link: "",
      buttonName: "Learn More",
    };

    setLinkCard2(
      <article className="card">
        <div className="card-body">
          <h2 className="card-title">{linkCard2.title}</h2>
          <p>{linkCard2.desc1}</p>
          <p>{linkCard2.desc2}</p>
          <p>{linkCard2.desc3}</p>
          <a href={linkCard2.link}>
            <button className="cardButton btn btn-success btn-sm">
              {linkCard2.buttonName}
            </button>
          </a>
        </div>
      </article>
    );

    // SECTION HISTORY
    const linkCard3 = {
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

    setLinkCard3(
      <article className="card">
        <div className="card-body">
          <h2 className="card-title">{linkCard3.title}</h2>
          <p>{linkCard3.desc1}</p>
          <p>{linkCard3.desc2}</p>
          <p>{linkCard3.desc3}</p>
          <a href={linkCard3.link}>
            <button className="cardButton btn btn-success btn-sm">
              {linkCard3.buttonName}
            </button>
          </a>
        </div>
      </article>
    );

    // SECTION TRIVIA
    const triviaCardContent = {
      title: "Random Trivia",
      buttonName: "Brew Question",
    };

    setTriviaCard(
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

    setDidMount(true);
    console.log("The Home component has mounted.");
  }

  // HANDLER FOR TRIVIA CARD BUTTON
  function handleClickTriviaCard(event) {
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
