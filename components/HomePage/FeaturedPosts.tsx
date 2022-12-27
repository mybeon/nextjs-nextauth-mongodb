import React from "react";
import PostsGrid from "../posts/PostsGrid";
import styles from "./featured-posts.module.css";
import { Post } from "../../types/posts";

type Props = {
  children?: React.ReactNode;
  posts: Post[];
};

const FeaturedPosts = (props: Props) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
