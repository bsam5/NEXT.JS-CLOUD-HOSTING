"use client";
import Link from "next/link";
interface errorPageProps {
  error: Error;
  reset: () => void;
}
const ErrorPage = ({ error, reset }: errorPageProps) => {
  return (
    <div className="container text-center">
      <h1 className="text-3xl text-red-500 my-5 font-semibold">
        something wont wrong
      </h1>
      <p
        className="text-xl text-gray-700
      my-3"
      >
        Massage Error: {error.message}
      </p>
      <button
        onClick={() => reset}
        className="text-xl bg-blue-500 rounded-full text-white p-3 hover:bg-blue-700   "
      >
        try again
      </button>
      <Link href="/" className="text-xl text-blue-700 block  mt-6 underline">
        Back To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
