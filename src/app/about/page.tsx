import Image from "next/image";
import cloudHosting from "../../../public/cloud-hosting.png";
const about = () => {
  return (
    <section className=" container m-auto">
      <h1 className="text-3xl font-bold p-5 text-gray-800">About Page</h1>
      <Image
        src={cloudHosting}
        alt="cloud"
        width={500}
        height={500}
        priority={false}
      />
    </section>
  );
};

export default about;
