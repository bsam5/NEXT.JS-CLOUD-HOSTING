import Link from "next/link";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineArticle } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
const AdminSidebar = () => {
  return (
    <div>
      <Link
        href="/admin"
        className="flex items-center text-lg lg:text-2xl font-semibold"
      >
        <CgMenuGridR className="text-3xl me-1" />
        <span className="hidden lg:block">Dashboard</span>
      </Link>
      <ul className="mt-10 flex items-center justify-center flex-col lg:items-start">
        <Link
          href="/admin/articles-table"
          className="flex items-center text-xl mb-5 lg:border-b border-gray-300 hover:text-yellow-200 transition"
        >
          <MdOutlineArticle className="me-1" />
          <span className="hidden lg:block">Articles</span>
        </Link>
        <Link
          href="/admin/comments-table"
          className="flex items-center text-xl mb-5 lg:border-b border-gray-300 hover:text-yellow-200 transition"
        >
          <FaRegComments className="me-1" />
          <span className="hidden lg:block">Comments</span>
        </Link>
      </ul>
    </div>
  );
};

export default AdminSidebar;
