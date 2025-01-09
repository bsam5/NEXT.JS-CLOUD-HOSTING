import { Article } from "@/utils/types";
import AddCommentForm from "@/components/comments/AddCommentForm";
import CommentItem from "@/components/comments/CommentItem";

interface SingleArticlePageProps {
  params: { id: string };
}

const SingleArticlePage = async ({ params }: SingleArticlePageProps) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data: Article = await response.json();
  const singleArticle = data;
  if (!response.ok) {
    throw new Error("Failed to fetch single article");
  }

  return (
    <section className="fix-height container m-auto w-full px-5 pt-8 md:w-3/4">
      <div className="bg-white p-7 rounded-lg mb-7">
        <h1 className="text-xl font-bold text-gray-900">
          {singleArticle.title}
        </h1>
        <p className="text-xl my-1 text-gray-700 p-1">1/1/2025</p>
        <p className="text-xl my-2 text-gray-700 p-1">{singleArticle.body}</p>
      </div>
      <AddCommentForm></AddCommentForm>
      <h4 className="text-xl text-gray-800 ps-1 font-semibold mb-2 mt-7">
        Comments
      </h4>
      <CommentItem></CommentItem>
      <CommentItem></CommentItem>
      <CommentItem></CommentItem>
    </section>
  );
};

export default SingleArticlePage;
