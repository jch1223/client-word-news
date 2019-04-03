import React from "react";
import { ngramColor } from "../../data";

export default ({ grade, data }) => {
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
