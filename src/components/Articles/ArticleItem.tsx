import { Article } from "@/utils/types";
import Link from "next/link";

interface ArticleItemProps {
  article: Article;
}
const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <div className="p-5 rounded-lg my-1 shadow-lg border-2 border-gray-400 hover:bg-slate-200 w-full md:w-2/5 lg:w-1/4">
      <h1 className="text-xl font-bold text-gray-900 line-clamp-1">
        {article.title}
      </h1>
      <p className="text-xl my-2 text-gray-700 p-1 line-clamp-1">
        {article.body}
      </p>

      <Link
        className="text-xl bg-purple-700 hover:bg-purple-800 w-full block text-center text-white py-2 rounded-lg"
        href={`/articles/${article.id}`}
      >
        Read More
      </Link>
    </div>
  );
};

export default ArticleItem;
