import React from "react";
import styles from "./logo.module.css";

type Props = {
  children?: React.ReactNode;
};

const Logo = (props: Props) => {
  return <div className={styles.logo}>NextJs Blog</div>;
};

export default Logo;
