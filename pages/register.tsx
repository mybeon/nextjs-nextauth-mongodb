import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import Head from "next/head";

type Props = {
  children?: React.ReactNode;
};

const register = (props: Props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Register</title>
      </Head>
      <RegisterForm />
    </React.Fragment>
  );
};

export default register;
