import { GetStaticProps } from "next";
import React from "react";
import FeaturedPosts from "../components/HomePage/FeaturedPosts";
import Hero from "../components/HomePage/Hero";
import { getFeaturedPosts } from "../lib/posts-util";
import { Post } from "../types/posts";
import Head from "next/head";

type Props = {
  children?: React.ReactNode;
  featuredPosts: Post[];
};

const index = (props: Props) => {
  return (
    <React.Fragment>
      <Head>
        <title>Next blog</title>
        <meta name="description" content="i post about programming and web development" />
      </Head>
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
