import Head from "next/head";
import React from "react";
import LoginForm from "../components/auth/LoginForm";

type Props = {
  children?: React.ReactNode;
};

const login = (props: Props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Login</title>
      </Head>
      <LoginForm />
    </React.Fragment>
  );
};

export default login;
