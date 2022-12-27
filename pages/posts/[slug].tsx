import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import { Post } from "../../types/posts";

type Props = {
  children?: React.ReactNode;
  postData: Post;
};

const SinglePostPage = ({ postData }: Props) => {
  return <PostContent data={postData} />;
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
