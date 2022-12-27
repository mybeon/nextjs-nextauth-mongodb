import React from "react";
import { GetStaticProps } from "next";
import { getAllPosts } from "../../lib/posts-util";
import AllPosts from "../../components/posts/AllPosts";
import { Post } from "../../types/posts";

type Props = {
  children?: React.ReactNode;
  posts: Post[];
};

const AllPostsPage = (props: Props) => {
  return <AllPosts items={props.posts} />;
};

export const getStaticProps: GetStaticProps = () => {
  const result = getAllPosts();
  return {
    props: {
      posts: result,
    },
  };
};

export default AllPostsPage;
