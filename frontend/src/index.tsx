import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Views/Home";
import { Shop } from "./Views/Shop";
import { About } from "./Views/About";
import { Contact } from "./Views/Contact";
import "./index.scss";
import { Header } from "./Views/Header";
import { Footer } from "./Views/Footer";
import { HandleRefresh } from "./Views/HandleRefresh";
import { Server } from "./Views/Server";
import { MyAccount } from "./Views/MyAccount";
import { Provider } from "react-redux";
import { store } from "./modules/redux/store";

const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);

const domain = window.location.hostname;
console.log(`Domain: ${domain}`);
let rootpath: string = "";
if (domain === "yuki-konn.github.io") rootpath = "/capstone-level-4";

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <HandleRefresh>
        <Header />
        <Routes>
          <Route path={`${rootpath}/`} element={<Home />} />
          <Route path={`${rootpath}/shop`} element={<Shop />} />
          <Route path={`${rootpath}/about`} element={<About />} />
          <Route path={`${rootpath}/contact`} element={<Contact />} />
          <Route path={`${rootpath}/server`} element={<Server />} />
          <Route path={`${rootpath}/account`} element={<MyAccount />} />
        </Routes>
        <Footer />
      </HandleRefresh>
    </BrowserRouter>
  </Provider>
);
