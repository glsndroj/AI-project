"use client";

import { useEffect, useState } from "react";

type User = {
  name: string;
  age: number;
  id: number;
};
export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((res) => setUsers(res.users));
  }, []);
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {users.map((user) => {
        return (
          
            <p key={user.id}>{user.name}</p>
          
          
        )
        
})}
    </div>
  );
}
