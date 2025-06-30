import { NextResponse } from "next/server";

export async function GET() {
  // Example static user data
  const users = [
    { id: 1, name: "Name1", email: "name1@example.com" },
    { id: 2, name: "Name2", email: "name2@example.com" },
    { id: 3, name: "Name3", email: "name3@example.com" },
  ];
  return NextResponse.json(users);
}
