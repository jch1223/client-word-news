import React, { Component } from "react";
import { ngramColor } from "../../data";

export default ({ grade, data }) => {
  console.log("data", data);
  return (
    <span
      style={{
        borderBottom: `3px ${ngramColor[grade]} solid`
      }}
    >
      {data}
    </span>
  );
};
