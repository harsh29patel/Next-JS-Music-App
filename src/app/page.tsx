import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeautredCourses from "./components/FeautredCourses";
import Whychooseuse from "./components/Whychooseuse";
import MusicTestimonials from "./components/Testimonialcard";
import UpcomingWebinar from "./components/UpcomingWebinar";
import Instructors from "./components/Instructors";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       <h1 className="text-2xl  text-center"></h1>
       <HeroSection/>
       <FeautredCourses/>
       <Whychooseuse/>
       <MusicTestimonials/>
       <UpcomingWebinar/>
       <Instructors/>
  </main>
  );
}
