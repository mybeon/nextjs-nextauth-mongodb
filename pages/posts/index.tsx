import React from "react";
import { GetStaticProps } from "next";
import { getAllPosts } from "../../lib/posts-util";
import AllPosts from "../../components/posts/AllPosts";
import { Post } from "../../types/posts";
import Head from "next/head";

type Props = {
  children?: React.ReactNode;
  posts: Post[];
};

const AllPostsPage = (props: Props) => {
  return (
    <React.Fragment>
      <Head>
        <title>All posts</title>
        <meta name="description" content="A list of all programming related tutorials and posts" />
      </Head>
      <AllPosts items={props.posts} />;
    </React.Fragment>
  );
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
