import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const dataFetch = async ()=>{
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Content not found', error);
      }
    }
    dataFetch();
  }, []);
  
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  
  if (!session) {
    router.push("/login");
    return null;
  }

  return (
    <div style={{ padding: "20px" }} className="container text-center">
      <h1>Dashboard</h1>
      <p>Welcome, {session.user.name}!</p>
      {session.user.image && (
        <img
          src={session.user.image}
          alt="Profile"
          style={{ width: "100px", borderRadius: "50%", margin: "20px auto" }}
        />
      )}
      <p>{session.user.email}</p> 
      <br/>
      <button  onClick={()=> signOut()}>Logout</button>
      
      {/* <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul> */}
    </div>
  );
}