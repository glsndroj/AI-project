"use client";

import { symlink } from "fs";
import { useEffect, useState } from "react";

// type User = {
//   name: string;
//   age: number;
//   _id: string;
// };
// export default function Home() {
//   const [users, setUsers] = useState<User[]>([]);

//   useEffect(() => {
//     fetch("/api/users")
//       .then((res) => res.json())
//       .then((res) => setUsers(res.users));
//   }, []);
//   return (
//     <div className="w-screen h-screen flex flex-col items-center justify-center">
//       {users.map((user) => {
//         return <p key={user._id}>{user.name}</p>;
//       })}
//     </div>
//   );
// }


export default function Home () {
const [prompt, setPrompt] = useState("")
const [imageUrl, setImageUrl] = useState("")
const [loading, setLoading] = useState(false)

const generateImage = async ()=> {
if(!prompt.trim()) return;
setLoading(true);
setImageUrl("")

try {
  const response = await fetch("/api/ai", {
    method: "POST",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify({prompt})

  })
  if(response.ok) {
    const blob = await response.blob();
    const url = URL.createObjectURL(blob)
    setImageUrl(url);
  } else console.error("Failed to generate image!")
} catch (error) {
  console.error("Error: ", error)
}finally {
  setLoading(false)
}
}
return (
  <div className="w-screen min-h-screen flex items-center justify-center p-8">
    <div className="max-w-2xl w-full space-y-6">
      <h1 className="text-3xl font-bold text-center">Text to Image</h1>
      <div className="space-y-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && generateImage()}
          placeholder="Enter your prompt..."
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={generateImage}
          disabled={loading || !prompt.trim()}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
        >
          {loading ? "Generating..." : "Generate Image"}
        </button>
      </div>
      {imageUrl && (
        <div className="mt-8 border rounded-lg p-4">
          <img src={imageUrl} alt="Generated" className="w-full rounded-lg" />
        </div>
      )}
    </div>
  </div>
);
}



