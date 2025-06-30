"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function SwrFetch() {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  if (isLoading) return <div>Loading users (SWR)...</div>;
  if (error) return <div>Error loading users: {error.message}</div>;

  return (
    <div>
      <h2>SWR Client Component</h2>
      <ul>
        {data.map((user: any) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
