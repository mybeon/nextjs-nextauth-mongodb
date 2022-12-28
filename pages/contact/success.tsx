import React from "react";
import Head from "next/head";

type Props = {
  children?: React.ReactNode;
};

const success = (props: Props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Success</title>
      </Head>
      <h2 style={{ textAlign: "center", marginTop: "5rem", fontSize: "3rem" }}>Your message was sent successfully !</h2>
    </React.Fragment>
  );
};

export default success;
