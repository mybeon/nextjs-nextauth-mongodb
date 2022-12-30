import Head from "next/head";
import React from "react";
import LoginForm from "../components/auth/LoginForm";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};

export default login;
