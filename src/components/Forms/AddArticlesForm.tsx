"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddArticlesForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title === "") return toast.error("Title Is Required");
    if (description === "") return toast.error("Description Is Required");
    console.log(title, description);
  };
  return (
    <form className="flex flex-col" onSubmit={handelSubmit}>
      <input
        type="text"
        className="mb-4 rounded border p-2 text-xl"
        placeholder="Enter Article title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="mb-4 rounded resize-none lg:text-xl p-2"
        rows={5}
        placeholder="Enter Article Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        type="submit"
        className="text-2xl text-white bg-blue-700 hover:bg-blue-900 p-2 rounded-md"
      >
        Add
      </button>
    </form>
  );
};

export default AddArticlesForm;
