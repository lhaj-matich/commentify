import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        borderTop: "1px solid #f1f1f1",
        height: "90vh",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
