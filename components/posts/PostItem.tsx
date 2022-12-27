import Link from "next/link";
import React from "react";
import styles from "./post-item.module.css";
import { Post } from "../../types/posts";
import Image from "next/image";

type Props = {
  children?: React.ReactNode;
  item: Post;
};

const PostItem = (props: Props) => {
  const { title, image, excerpt, date, slug } = props.item;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <li className={styles.post}>
      <Link href={`/posts/${slug}`}>
        <div className={styles.image}>
          <Image src={`/images/posts/${image}`} alt={title} width={300} height={220} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
