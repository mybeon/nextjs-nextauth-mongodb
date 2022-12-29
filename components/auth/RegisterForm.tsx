import React, { FormEvent } from "react";
import styles from "./form.module.css";

type Props = {
  children?: React.ReactNode;
};

const RegisterForm = (props: Props) => {
  function registerHandler(e: FormEvent<HTMLFormElement>) {}
  return (
    <React.Fragment>
      <form onSubmit={registerHandler} className={styles.form}>
        <h2>Register</h2>
        <div className={styles.control}>
          <label htmlFor="username">username</label>
          <input type="text" id="username" />
        </div>
        <div className={styles.control}>
          <label htmlFor="email">email</label>
          <input type="email" id="email" />
        </div>
        <div className={styles.control}>
          <label htmlFor="password">password</label>
          <input type="password" id="password" />
        </div>
        <div className={styles.action}>
          <button>register</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default RegisterForm;
