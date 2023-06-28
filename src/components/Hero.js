import React, { useEffect, useState } from "react";
import "./Hero.css";

import { apiUrl, filterData1, filterdata2 } from "./data";
import Quests from "./Quests";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Spinner from "./Spinner";
const Hero = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();

      setProjects(output.results);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="hero">
      <div className="emptSpace"></div>
      <div>
        <Quests />
      </div>
      <div className="heroContent">
        <div>
          <Navbar filterData1={filterData1} filterData2={filterdata2} />
        </div>

        <div>{loading ? <Spinner /> : <Cards projects={projects} />}</div>
      </div>
    </div>
  );
};

export default Hero;
