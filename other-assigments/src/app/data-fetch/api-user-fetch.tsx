"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ApiUserFetch() {
  const { data, error, isLoading } = useSWR("/assignment1/api/user", fetcher);

  if (isLoading) return <div>Loading API...</div>;
  if (error) return <div>Error loading users: {error.message}</div>;

  return (
    <div className="wrapper">
      <h2>Local API Route</h2>
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
