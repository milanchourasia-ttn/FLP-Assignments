import Link from "next/link";
import React from "react";

const Home = () => {

  return (
    <div className="container text-center">
      <h1>Please Login</h1>
      <Link href='/login' className="button">Login</Link>
    </div>
  );
};

export default Home;
