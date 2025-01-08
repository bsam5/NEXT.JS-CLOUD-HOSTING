import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className=" fix-height flex justify-center items-center flex-col ">
      <h1 className="text-7xl text-gray-800 font-bold">404</h1>
      <h1 className="text-3xl text-gray-500 mt-2 mb-5">page not found</h1>
      <Link href="/" className="text-xl text-blue-700 block  underline">
        Back To Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
