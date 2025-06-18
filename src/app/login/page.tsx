"use client";
import {useState} from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({email: email, password: password});
  };

  return (
    <form className="mx-auto flex max-w-32 flex-col items-center gap-4" onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold">Login</h1>

      <input
        className="border border-gray-500 p-2"
        placeholder="Email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border border-gray-500 p-2"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
        Login
      </button>
    </form>
  );
}
