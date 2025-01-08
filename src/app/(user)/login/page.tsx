import LoginForm from "@/components/Forms/LoginForm";
const login = () => {
  return (
    <section className="container m-auto px-7 fix-height flex justify-center items-center flex-col">
      <div className="m-auto bg-white rounded-lg p-5 w-full md:w-2/3">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Log In</h1>
        <LoginForm />
      </div>
    </section>
  );
};

export default login;
