import React from "react";
import RegisterForm from "../components/auth/RegisterForm";
import Head from "next/head";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";

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

export default register;
