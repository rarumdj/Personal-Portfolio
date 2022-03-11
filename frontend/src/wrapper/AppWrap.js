import React from "react";
import Social from "../components/Social";
import NavFloat from "../components/NavFloat";
import NavBar from "../components/NavBar";

const AppWrap = (Component, idName, classNames, NavClass) =>
  function HOC() {
    return (
      <>
        <div className={`${NavClass}`} >
          <NavBar active={idName} />
        </div>
        <div id={idName} className={`${classNames}`}>
          <Social />
          <div className="">
            <Component />
          </div>
          <NavFloat active={idName} />
        </div>
      </>
    );
  };

export default AppWrap;
