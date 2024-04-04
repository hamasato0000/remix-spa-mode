import { useLoaderData } from "@remix-run/react";

export async function clientLoader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts;
}

export default function Blog() {
  const posts = useLoaderData<typeof clientLoader>();

  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/blog/${post.id}`}> {post.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
