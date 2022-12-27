import React from "react";
import styles from "./post-content.module.css";
import PostHeader from "./PostHeader";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Post } from "../../../types/posts";
type Props = {
  children?: React.ReactNode;
  data: Post;
};

const PostContent = (props: Props) => {
  return (
    <article className={styles.content}>
      <PostHeader title={props.data.title} image={props.data.image} />
      <ReactMarkdown>{props.data.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
