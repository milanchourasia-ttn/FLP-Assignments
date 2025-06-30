import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav>
        <ul>
          <li>
            <Link href="/data-fetch">Data Fetching</Link>
          </li>
          <li>
            <Link href="/blog">Blog Listing (ISR)</Link>
          </li>
        </ul>
      </nav>
      <h1>Homepage With SSG.</h1>
    </main>
  );
}
