import Image from "next/image";
import React from "react";
import styles from "./post-header.module.css";

type Props = {
  children?: React.ReactNode;
  title: string;
  image: string;
};

const PostHeader = ({ title, image }: Props) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Image src={`/images/posts/${image}`} alt={title} height={150} width={200} />
    </header>
  );
};

export default PostHeader;
