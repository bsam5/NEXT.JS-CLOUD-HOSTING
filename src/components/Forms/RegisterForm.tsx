"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "") return toast.error("Username Is Required");
    if (email === "") return toast.error("Email Is Required");
    if (password === "") return toast.error("Password Is Required");
    console.log({ email, password, username });
    router.replace("/");
  };
  return (
    <form className="flex flex-col" onSubmit={handelSubmit}>
      <input
        type="text"
        className="mb-4 rounded border p-2 text-xl"
        placeholder="Enter You'r Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        className="mb-4 rounded border p-2 text-xl"
        placeholder="Enter You'r Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="mb-4 rounded border p-2 text-xl"
        placeholder="Enter You'r Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="text-2xl text-white bg-blue-800 p-2 rounded-md"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
