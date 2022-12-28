import Head from "next/head";
import React from "react";
import ContactForm from "../../components/contact/ContactForm";

type Props = {
  children?: React.ReactNode;
};

const contact = (props: Props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="send me your message" />
      </Head>
      <ContactForm />;
    </React.Fragment>
  );
};

export default contact;
