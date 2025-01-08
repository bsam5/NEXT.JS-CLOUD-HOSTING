"use client";
import { useEffect, useState } from "react";
import { Article } from "@/utils/types";
import ArticleItem from "@/components/Articles/ArticleItem";
import { error } from "console";

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data: Article[] = await response.json();
      setArticles(data);
      if (!response.ok) throw new Error("Field To Fetch Articles");
    };
    fetchData();
  }, []);

  return (
    <section className="container m-auto px-5">
      <div className="flex justify-center items-center gap-7 flex-wrap mt-3">
        {articles.map((item) => (
          <ArticleItem key={item.id} article={item} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
