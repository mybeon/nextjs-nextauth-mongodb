import React from "react";

type Props = {
  children?: React.ReactNode;
};

const success = (props: Props) => {
  return <h2 style={{ textAlign: "center", marginTop: "5rem", fontSize: "3rem" }}>Your message was sent successfully !</h2>;
};

export default success;
