import React, { useRef, useState } from "react";
import styles from "./contact-form.module.css";
import { useRouter } from "next/router";

type Props = {
  children?: React.ReactNode;
};

const ContactForm = (props: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    setLoading(true);
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
    if (response.ok) {
      router.replace("/contact/success");
    } else {
      setError(true);
      setLoading(false);
      formRef.current?.reset();
    }
  }
  return (
    <section className={styles.contact}>
      <h1>How can i help you</h1>
      {error && (
        <p style={{ color: "red", fontSize: "1rem", textAlign: "center" }}>Invalid fields, please make sure your are filling the fields correctly.</p>
      )}
      <form ref={formRef} onSubmit={submitHandler} className={styles.form}>
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
          <button disabled={loading}>Send message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
