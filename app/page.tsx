import Image from "next/image";
import InfoBar from "./components/InfoBar";
import MainHero from "./components/MainHero";
import WelcomeBar from "./components/WelcomeBar"
import ReviewsBar from "./components/ReviewsBar";

export default function Home() {
  return (
    <div>
      <main>
        
        <MainHero/>
        <WelcomeBar/>
        <InfoBar/>
        <ReviewsBar/>
        
      </main>
    </div>
  );
}
