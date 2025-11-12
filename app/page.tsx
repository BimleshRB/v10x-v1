import ChatBot from "@/components/ChatBot";
import ContentGrid from "@/components/ContentGrid";
import Footer from "@/components/Footer";
// import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocietalImpact from "@/components/social-impact";
// import Image from "next/image";

export default function Home() {
 return (
    <div className="min-h-screen ">
      <Hero />
      <ContentGrid />
      <SocietalImpact />
      {/* <Footer />
      <ChatBot /> */}
    </div>
  )
}
