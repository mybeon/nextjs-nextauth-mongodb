import React, { FormEvent } from "react";
import styles from "./form.module.css";

type Props = {
  children?: React.ReactNode;
};

const LoginForm = (props: Props) => {
  function loginHandler(e: FormEvent<HTMLFormElement>) {}
  return (
    <React.Fragment>
      <form onSubmit={loginHandler} className={styles.form}>
        <h2>Login</h2>
        <div className={styles.control}>
          <label htmlFor="email">email</label>
          <input type="email" id="email" />
        </div>
        <div className={styles.control}>
          <label htmlFor="password">password</label>
          <input type="password" id="password" />
        </div>
        <div className={styles.action}>
          <button>login</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default LoginForm;
