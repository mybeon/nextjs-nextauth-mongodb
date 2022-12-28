import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import { Post } from "../../types/posts";
import Head from "next/head";

type Props = {
  children?: React.ReactNode;
  postData: Post;
};

const SinglePostPage = ({ postData }: Props) => {
  return (
    <React.Fragment>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.excerpt} />
      </Head>
      <PostContent data={postData} />;
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  const fileName = context.params?.slug + ".md";
  const result = getPostData(fileName);
  return {
    props: {
      postData: result,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const result = getPostsFiles();
  const arrPaths = result.map((filename) => ({ params: { slug: filename.replace(/\.md$/, "") } }));
  return {
    paths: arrPaths,
    fallback: false,
  };
};

export default SinglePostPage;
