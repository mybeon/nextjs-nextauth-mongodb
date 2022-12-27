import React from "react";
import PostItem from "./PostItem";
import styles from "./posts-grid.module.css";
import { Post } from "../../types/posts";

type Props = {
  children?: React.ReactNode;
  posts: Post[];
};

const PostsGrid = ({ posts }: Props) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} item={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
