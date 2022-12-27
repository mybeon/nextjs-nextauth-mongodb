import React from "react";
import ContactForm from "../components/contact/ContactForm";

type Props = {
  children?: React.ReactNode;
};

const contact = (props: Props) => {
  return <ContactForm />;
};

export default contact;
