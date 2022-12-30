import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import styles from "./main-navigation.module.css";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

type Props = {
  children?: React.ReactNode;
};

const MainNavigation = (props: Props) => {
  const pathname = useRouter().pathname;

  const { data } = useSession();
  function logoutHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    signOut();
  }
  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link className={pathname == "/posts" ? styles.active : ""} href="/posts">
              Posts
            </Link>
          </li>
          <li>
            <Link className={pathname == "/contact" ? styles.active : ""} href="/contact">
              Contact
            </Link>
          </li>
          {data ? (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          ) : (
            <li>
              <Link className={pathname == "/login" ? styles.active : ""} href="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
