import React from "react";
import { Post } from "../../types/posts";
import styles from "./all-posts.module.css";
import PostsGrid from "./PostsGrid";

type Props = {
  children?: React.ReactNode;
  items: Post[];
};

const AllPosts = ({ items }: Props) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={items} />
    </section>
  );
};

export default AllPosts;
