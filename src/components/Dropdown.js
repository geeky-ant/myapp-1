import React, { useState } from "react";
import "./Dropdown.css";
import { filterdata2 } from "./data";
const Dropdown = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsopen((prev) => !prev)}>More</button>
      {isOpen && (
        <div className="dropdwn">
          {filterdata2.map((data) => (
            <button key={data.id}> {data.title}</button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
