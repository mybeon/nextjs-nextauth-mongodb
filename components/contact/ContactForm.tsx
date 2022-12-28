import React, { useRef } from "react";
import styles from "./contact-form.module.css";

type Props = {
  children?: React.ReactNode;
};

const ContactForm = (props: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;
    const response = await fetch("/api/contact", {
      body: JSON.stringify({ name, email, message }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <section className={styles.contact}>
      <h1>How can i help you</h1>
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="name">You name</label>
            <input ref={nameRef} type="text" id="name" required />
          </div>
          <div className={styles.control}>
            <label htmlFor="email">You email</label>
            <input ref={emailRef} type="email" id="email" required />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">You message</label>
          <textarea ref={messageRef} id="message" rows={5}></textarea>
        </div>
        <div className={styles.actions}>
          <button>Send message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
