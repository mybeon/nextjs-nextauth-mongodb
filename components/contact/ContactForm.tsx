import React from "react";
import styles from "./contact-form.module.css";

type Props = {
  children?: React.ReactNode;
};

const ContactForm = (props: Props) => {
  return (
    <section className={styles.contact}>
      <h1>How can i help you</h1>
      <form className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="name">You name</label>
            <input type="text" id="name" required />
          </div>
          <div className={styles.control}>
            <label htmlFor="email">You email</label>
            <input type="email" id="email" required />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">You message</label>
          <textarea id="message" rows={5}></textarea>
        </div>
        <div className={styles.actions}>
          <button>Send message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
