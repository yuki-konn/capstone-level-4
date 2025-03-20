import React, { useEffect, useState } from "react";
import "./About.scss";
import "../index.scss";

export function About() {
  const [didMount, setDidMount] = useState(false);
  useEffect(componentDidMount, []); // MOUNT HOOK
  useEffect(componentDidUpdate, [didMount]); // UPDATE HOOK
  useEffect(componentDidUnmount, []); // UNMOUNT HOOK

  return (
    <main id="aboutMain" className="container-lg">
      <div
        id="aboutTitle"
        className="m-2 text-center border border-3 border-success bg-warning"
      >
        <h1>ABOUT</h1>
        <p>This page is to better explain the features of my project.</p>
      </div>

      <section id="sectionLvl3">
        <h2 className="m-2 text-center bg-warning">Level 3</h2>
        <article className="m-2 p-2">
          <h3 className="textShadow text-center">
            Coding difference between Level 2 and Level 3
          </h3>
          <ul className="list-group-numbered list-group border border-3 border-dashed border-black">
            <li className="list-group-item">
              Converted all pages to <b>React JS</b>.
            </li>
            <li className="list-group-item">
              Made the website a <b>Single-Page Application</b>.
            </li>
            <li className="list-group-item">
              Added console logs to show page switches and help <i>debug</i>.
            </li>
            <li className="list-group-item">
              Added <code>404.html</code> to prevent website crashing on refresh
              with <b>GitHub Pages</b>.
            </li>
            <li className="list-group-item">
              Only using <b>SASS</b> and <b>Bootstrap</b> for Styling.
            </li>
            <li className="list-group-item">
              Added <b>Global Styles</b>.
            </li>
            <li className="list-group-item">
              Added <b>Global Header</b> and <b>Global Footer</b>.
            </li>
            <li className="list-group-item">Added tests with jest.</li>

            <ul>
              <b>Added Node Packages</b>
              <li className="list-group-item">
                <code>react</code> and <code>react-dom</code> for React JS.
              </li>
              <li className="list-group-item">
                <code>webpack</code> and <code>webpack-cli</code> to bundle code
                into one file.
              </li>
              <li className="list-group-item">
                <code>babel-loader</code> to compile and convert HTML to
                Javascript. Other babel packages <code>@babel/core</code>,{" "}
                <code>@babel/cli</code>, <code>@babel/preset-react</code>,{" "}
                <code>@babel/preset-env</code>.
              </li>
              <li className="list-group-item">
                Added <code>react-router</code> package for navigation.
              </li>

              <li className="list-group-item">
                <code>sass</code>, <code>sass-loader</code>,{" "}
                <code>css-loader</code>, <code>style-loader</code> to import
                component styles.
              </li>
              <li className="list-group-item">
                <code>jest</code>, <code>@jest/globals</code> for unit testing.
              </li>
            </ul>
            {/* <li className="list-group-item">...</li> */}
          </ul>
        </article>
        <article className="m-2 p-2">
          <h3 className="textShadow text-center">New Features</h3>
          <ul className="list-group-numbered list-group border border-3 border-dashed border-black">
            <li className="list-group-item">Made website responsive.</li>
            <li className="list-group-item">
              Added Collapisble Navbar using Bootstrap.
            </li>
            <li className="list-group-item">Added Bootstrap Icons.</li>
            <li className="list-group-item">
              Changed rating system on <code>Contact.js</code> to Tea cup
              rating.
            </li>
            <li className="list-group-item">
              Added Sign-In Modal connected to a database with authentication to
              the Navbar.
            </li>
            <li className="list-group-item">
              Added new images to <b>Shop page</b>.
            </li>
            <li className="list-group-item">
              Added button animation to navigation buttons.
            </li>
            <li className="list-group-item">
              Added <b>Bootstrap Carousel</b> to Home page.
            </li>
            {/* <li className="list-group-item">...</li> */}
          </ul>
        </article>
      </section>

      <section id="sectionLvl2">
        <h2 className="m-2 text-center bg-warning">Level 2</h2>
        <article className="m-2 p-2">
          <h3 className="textShadow text-center">
            Coding difference between Level 1 and Level 2
          </h3>
          <ul className="list-group-numbered list-group border border-3 border-dashed border-black">
            <li className="list-group-item">
              Created image map to <code>index.html</code> banner image.
            </li>
            <li className="list-group-item">
              Created button animation using SASS and mixins to buttons in
              <code>index.html</code>.
            </li>
            <li className="list-group-item">
              Added <code>opacity</code> to the footer.
            </li>
            <li className="list-group-item">
              Added <code>background-image</code> to all pages.
            </li>
            <li className="list-group-item">
              Added custom <code>font</code> to all pages.
            </li>
            <li className="list-group-item">
              Updated <code>about.html</code> with new articles.
            </li>
            <li className="list-group-item">
              Added Site map to <code>about.html</code>.
            </li>
            <li className="list-group-item">
              Created form process for both forms in <code>contact.html</code>{" "}
              and
              <code>contact.js</code>.
            </li>
            <li className="list-group-item">
              Created server simulation for both forms in
              <code>contact.html</code> and <code>contact.js</code>.
            </li>
            <li className="list-group-item">
              Added OpenTBD REST API to create a trivia card in
              <code>index.html</code>.
            </li>
            <li className="list-group-item">Created SASS for all pages.</li>
            <li className="list-group-item">
              Created <u>docs</u> folder for all <i>.md</i> files except
              <code>README.md</code>.
            </li>
            <li className="list-group-item">
              Created <u>res</u> folder for all <i>fonts</i> and <i>images</i>.
            </li>
          </ul>
        </article>
        <article className="m-2 p-2">
          <h3 className="textShadow text-center">New Features</h3>
          <ul className="list-group-numbered list-group border border-3 border-dashed border-black">
            <li className="list-group-item">
              Image map on banner image with links to my gitHub and Linkedin.
            </li>
            <li className="list-group-item">Animated buttons</li>
            <li className="list-group-item">
              Form submission processes with server simulation.
            </li>
            <li className="list-group-item">
              Created random trivia card on Home page.
            </li>
          </ul>
        </article>
      </section>

      <section id="sectionLvl1">
        <h2 className="m-2 text-center bg-warning">Level 1</h2>
        <article className="m-2 p-2">
          <h3 className="textShadow text-center">
            Coding difference between the original project and Level 1.
          </h3>
          <ul className="list-group-numbered list-group border border-3 border-dashed border-black">
            <li className="list-group-item">
              Changes to the theme from pizza to tea.
            </li>
            <li className="list-group-item">
              More fleshed out navigation bar.
            </li>
            <li className="list-group-item">
              Article tags seperating each section.
            </li>
            <li className="list-group-item">Added an About Page.</li>
            <li className="list-group-item">
              Renamed <code>gallery.html</code> to <code>shop.html</code>.
            </li>
          </ul>
        </article>
        <article className="m-2 p-2">
          <h3 className="textShadow text-center">New Features</h3>
          <ul className="list-group-numbered list-group border border-3 border-dashed border-black">
            <li className="list-group-item">
              Renewed <code>navbar</code> design with <code>hover</code>{" "}
              interaction.
            </li>
            <li className="list-group-item">
              The tab you are on gets highlighted in the <code>navbar</code>.
            </li>
            <li className="list-group-item">
              Better implemented <b>site map</b>.
            </li>
            <li className="list-group-item">
              Shop page has interactive button that alerts you when you click
              "add to cart".
            </li>
            <li className="list-group-item">
              Contacts page has rating system with <b>radio buttons</b>.
            </li>
            <li className="list-group-item">Custom made website banner.</li>
          </ul>
        </article>
      </section>

      <div id="siteMapGroup" className="m-1">
        <span className="fw-bold p-0 m-0">
          <u style={{ color: "green" }}>Sitemap</u>
        </span>
        <ul className="list-group p-1">
          <li className="list-group-item">
            <a className="no-decor" href="#article1">
              <span>Level 1 vs Level 2</span>
            </a>
          </li>
          <li className="list-group-item">
            <a className="no-decor" href="#article2">
              <span>New Features</span>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );

  // MOUNT PHASE
  function componentDidMount() {
    document.title = "Yuki Tea Shop | ABOUT";
    setDidMount(true);
    console.log("The About component has mounted.");
  }

  // UPDATE PHASE
  function componentDidUpdate() {
    if (didMount) {
      console.log("The About component has updated.");
    }
  }
}

// UNMOUNT PHASE
function componentDidUnmount() {
  return function () {
    console.log("The About component has unmounted.");
  };
}
