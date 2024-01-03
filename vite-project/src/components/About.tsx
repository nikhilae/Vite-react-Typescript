import React, { useState, useEffect } from "react";

const About = () => {
  const [count, updateCount] = useState(100);
  return (
    <div>
      <button onClick={() => updateCount(count + 1)} className="counting">
        Click me
      </button>
      <h2>Count is:{count}</h2>
    </div>
  );
};

export default About;
