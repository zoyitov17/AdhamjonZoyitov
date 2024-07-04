import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Internet from "./components/Internet";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-[1440px] h-auto bg-[rgba(17,24,39,1)] mx-auto pt-16">
      <Nav />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="service">
        <Service />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="internet">
        <Internet />
      </section>
    </div>
  );
}

export default App;
