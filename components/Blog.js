import Image from "next/image";

export default function Blog() {
  return (
    <div className="">
      <a href="https://next-blog-sanity.vercel.app/">
        <Image
          className="mb-5 shadow-small hover:shadow-lg"
          src="https://images.pexels.com/photos/145683/pexels-photo-145683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="werkApp"
        />
      </a>
      <h3 className="text-3xl mb-4 hover:underline decoration-2">
        <a href="https://next-blog-sanity.vercel.app/">
          Preview Mode for Static Generation
        </a>
      </h3>
      <div className="text-lg mb-4">March 8, 2020 </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Praesent elementum
        facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui
        accumsan sit amet nulla facilisi morbi tempus.
      </div>
    </div>
  );
}
