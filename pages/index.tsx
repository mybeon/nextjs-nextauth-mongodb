import { GetStaticProps } from "next";
import React from "react";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";
import Hero from "../components/HomePage/Hero";
import { getFeaturedPosts } from "../lib/posts-util";
import { Post } from "../types/posts";

type Props = {
  children?: React.ReactNode;
  featuredPosts: Post[];
};

const index = (props: Props) => {
  return (
    <React.Fragment>
      <Hero />
      <FeaturedPosts posts={props.featuredPosts} />
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const result = getFeaturedPosts();
  return {
    props: {
      featuredPosts: result,
    },
  };
};

export default index;
