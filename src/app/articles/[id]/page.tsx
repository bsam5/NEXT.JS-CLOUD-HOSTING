"use client";
import * as React from "react";

import { useEffect, useState } from "react";
import { Article } from "@/utils/types";

interface SingleArticlePageProps {
  params: { id: string };
}

const SingleArticlePage = ({ params }: SingleArticlePageProps) => {
  // Unwrap the `params` object using React.use()
  const unwrappedParams = React.use(params);
  const [singleArticle, setSingleArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${unwrappedParams.id}`
        );
        console.log("Received response:", response);
        const data: Article = await response.json();
        console.log("Received data:", data);
        setSingleArticle(data);
        if (!response.ok) {
          console.error("Failed to fetch single article:", response.status);
          throw new Error("Failed to fetch single article");
        }
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };
    fetchData();
  }, [unwrappedParams.id]); // Use unwrappedParams.id as the dependency

  console.log("Single article state:", singleArticle);

  if (!singleArticle) {
    console.log("Single article is loading...");
    return <div>Loading...</div>;
  }

  console.log("Single article is loaded:", singleArticle);

  return (
    <div>
      <div className="p-5 rounded-lg my-1 shadow-lg border-2 border-gray-400 w-full">
        <h1 className="text-xl font-bold text-gray-900">
          {singleArticle.title}
        </h1>
        <p className="text-xl my-1 text-gray-700 p-1">1/1/2025</p>
        <p className="text-xl my-2 text-gray-700 p-1">{singleArticle.body}</p>
      </div>
    </div>
  );
};

export default SingleArticlePage;
