import { Article } from "@/utils/types";
import ArticleItem from "@/components/Articles/ArticleItem";
import Pagination from "@/components/Articles/Pagination";
import SearchArticleInput from "@/components/Articles/SearchArticleInput";

const Articles = async () => {
  await new Promise((re) => setTimeout(re, 2000));

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: Article[] = await response.json();
  const articles = data;
  if (!response.ok) throw new Error("Field To Fetch Articles");

  return (
    <section className="container m-auto px-5">
      <SearchArticleInput />
      <div className="flex justify-center items-center gap-7 flex-wrap mt-3">
        {articles.slice(0, 6).map((item) => (
          <ArticleItem key={item.id} article={item} />
        ))}
      </div>
      <Pagination />
    </section>
  );
};

export default Articles;
