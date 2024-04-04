import { Form, useLoaderData } from "@remix-run/react";

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
      <Form method="post" action="/blog/posts/create">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required />
        <label htmlFor="body">Body:</label>
        <textarea id="body" name="body" required></textarea>
        <button type="submit">Create Post</button>
      </Form>
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
