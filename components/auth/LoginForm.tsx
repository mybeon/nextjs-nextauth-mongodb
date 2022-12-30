import React, { FormEvent, useRef } from "react";
import styles from "./form.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
type Props = {
  children?: React.ReactNode;
};

const LoginForm = (props: Props) => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  function loginHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    signIn("credentials", { redirect: false, email, password }).then((res) => {
      if (res?.ok) {
        router.replace("/");
      } else {
        console.log(res);
      }
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={loginHandler} className={styles.form}>
        <h2>Login</h2>
        <div className={styles.control}>
          <label htmlFor="email">email</label>
          <input ref={emailRef} type="email" id="email" />
        </div>
        <div className={styles.control}>
          <label htmlFor="password">password</label>
          <input ref={passwordRef} type="password" id="password" />
        </div>
        <div className={styles.action}>
          <button>login</button>
          <Link href="/register">or Register</Link>
        </div>
      </form>
    </React.Fragment>
  );
};

export default LoginForm;
