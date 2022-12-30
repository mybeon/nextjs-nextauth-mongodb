import { signIn } from "next-auth/react";
import React, { FormEvent, useRef, useState } from "react";
import styles from "./form.module.css";

type Props = {
  children?: React.ReactNode;
};

const RegisterForm = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  function registerHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const username = usernameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    fetch("/api/auth/register", {
      body: JSON.stringify({ username, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data);
          setLoading(false);
        } else {
          signIn("credentials", { redirect: true, email, password });
        }
      });
  }
  return (
    <React.Fragment>
      <form onSubmit={registerHandler} className={styles.form}>
        <h2>Register</h2>
        <div className={styles.control}>
          <label htmlFor="username">username</label>
          <input ref={usernameRef} type="text" id="username" />
        </div>
        <div className={styles.control}>
          <label htmlFor="email">email</label>
          <input ref={emailRef} type="email" id="email" />
        </div>
        <div className={styles.control}>
          <label htmlFor="password">password</label>
          <input ref={passwordRef} type="password" id="password" />
        </div>
        <div className={styles.action}>
          <button disabled={loading}>register</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default RegisterForm;
