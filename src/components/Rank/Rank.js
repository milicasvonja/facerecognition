import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="purple f5">{`${name} your current entry count is...`}</div>
      <div className="purple f3">{entries}</div>
    </div>
  );
};

export default Rank;
