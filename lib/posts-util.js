import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentPath = path.resolve("content");

export function getPostData(filename) {
  const filePath = path.join(contentPath, filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);
  const postSlug = filename.replace(/\.md$/, "");
  const postData = {
    slug: postSlug,
    image: postSlug + ".png",
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(contentPath);
  const allPosts = postFiles.map((postFile) => getPostData(postFile));
  return allPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}

export function getPostsFiles() {
  return fs.readdirSync(contentPath);
}
