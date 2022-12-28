import Image from "next/image";
import React from "react";
import styles from "./hero.module.css";

type Props = {
  children?: React.ReactNode;
};

const Hero = (props: Props) => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image src="/images/site/hero.jpg" alt="" height={400} width={400} />
      </div>
      <h1>Hi, I&apos;m Hicham</h1>
      <p>I blog about web development - especially frontend frameworks like React and NextJs.</p>
    </section>
  );
};

export default Hero;
