import Image from "next/image";
import InfoBar from "./components/InfoBar";
import MainHero from "./components/MainHero";
import WelcomeBar from "./components/WelcomeBar"
import ReviewsBar from "./components/ReviewsBar";
import FeatServices from "./components/FeatServices";
import CTA from "./components/CTA";
export default function Home() {
  return (
    <div>
      <main>
        
        <MainHero/>
        <WelcomeBar/>
        <FeatServices/>
        <ReviewsBar/>
        <CTA/>
        
      </main>
    </div>
  );
}
