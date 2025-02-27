"use client";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";

const CommentItem = () => {
  return (
    <div className="mb-5 rounded-lg p-3 bg-gray-200 border-2 border-gray-300">
      <div className="flex items-center justify-between mb-2">
        <strong className="text-gray-800 uppercase">bassam</strong>
        <span className="bg-yellow-700 px-1 rounded-lg text-white">
          1/1/2025
        </span>
      </div>
      <p className="text-gray-800 mb-2 capitalize">thanks for this article</p>

      <div className="flex justify-end items-center">
        <FaEdit className="text-green-600 text-xl cursor-pointer me-3" />
        <FaTrash className="text-red-600 text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default CommentItem;
