import React from "react";
import styles from "./post-content.module.css";
import PostHeader from "./PostHeader";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Post } from "../../../types/posts";
import Image from "next/image";
import { Components } from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

type Props = {
  children?: React.ReactNode;
  data: Post;
};

const PostContent = (props: Props) => {
  const customComponents: Components = {
    img(image) {
      return <Image src={`/images/posts/${image.src}`} alt={image.alt || props.data.title} width={600} height={300} />;
    },
    code(code) {
      const language = code.className?.replace("language-", "");
      // @ts-ignore: type undefined
      const codeSnippet = code.node.children[0].value;
      return (
        <SyntaxHighlighter language={language} style={atomDark}>
          {codeSnippet}
        </SyntaxHighlighter>
      );
    },
  };
  return (
    <article className={styles.content}>
      <PostHeader title={props.data.title} image={props.data.image} />
      <ReactMarkdown components={customComponents}>{props.data.content!}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
