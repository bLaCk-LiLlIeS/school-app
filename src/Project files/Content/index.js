import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/index";
import AboutUs from "../AboutUs/index";
import Programs from "../Programs";
import Staff from "../Staff/index";
import News from "../News/index";
import Contact from "../Contact/index";

function Content() {
  return (
    <div style={{ backgroundColor: "#fbcbc9" }}>
      <Routes>
        <Route path="/home" Component={Home}></Route>
        <Route path="/aboutUs" Component={AboutUs}></Route>
        <Route path="/programs" Component={Programs}></Route>
        <Route path="/staff" Component={Staff}></Route>
        <Route path="/news&events" Component={News}></Route>
        <Route path="/contact" Component={Contact}></Route>
      </Routes>
    </div>
  );
}

export default Content;
