import "./page.css";
import Banner from "../components/Banner"
import Faq from "../components/FaqSection";

export const metadata ={
  
}

export default function Home() {
  return (
    <div className="h-full ">
      <Banner></Banner>
      <Faq></Faq>
      {/* <h1 className="text-5xl md:text-6xl font-bold mb-10">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Blog></Blog>
          <Blog></Blog>
          <Blog></Blog>
      </div> */}
      
    </div>
  );
}
