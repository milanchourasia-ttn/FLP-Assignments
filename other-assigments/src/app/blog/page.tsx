import Link from "next/link";
import styles from "../page.module.css";

// Simulated blog data
async function getPosts() {
  // In a real app, fetch from a CMS or database
  return [
    { id: "1", title: "Post1", summary: "This is the first post." },
    { id: "2", title: "Post2", summary: "This is the second post." },
    { id: "3", title: "Post3", summary: "This is the third post." },
  ];
}

export const revalidate = 60; 
export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <main className={styles.main}>
      <h1>Blog Listing (ISR)</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <strong>{post.title}</strong>
            </Link>
            <p>{post.summary}</p>
          </li>
        ))}
      </ul>
      <h2>
        Incremental Static Regeneration (ISR)
      </h2>
    </main>
  );
}
