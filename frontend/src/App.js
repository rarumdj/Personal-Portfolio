import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./containers/About";
import Experience from "./containers/Experience";
import Footer from "./containers/Footer";
import Work from "./containers/Work";

function App() {
  return (
    <div className="App">
      <section className="section-gradient relative">
        <Header />
      </section>
      <About />
      <Experience />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
