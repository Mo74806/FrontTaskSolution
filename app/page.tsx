import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Suppliers from "@/components/Suppliers";

export default function Home() {
  return (
    <div className=" bg-bgLight dark:bg-bgDark">
      <Navbar />
      <div className="mt-[84px]">
        <Hero />
        <About />
        <Services />
        <Suppliers />
        <Footer />
        {/*
         */}
      </div>
    </div>
  );
}
