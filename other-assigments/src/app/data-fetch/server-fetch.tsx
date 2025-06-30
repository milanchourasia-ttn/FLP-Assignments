import React from "react";
export default async function ServerFetch() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 30 },
  });
  const users = await res.json();

  return (
    <div>
      <h2>Server Component</h2>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
