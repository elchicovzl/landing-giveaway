import { LandingNavbar } from "@/components/landing-navbar";
import LandingHero from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import getGiveways from "@/actions/get-giveways";
import TypewriterComponent from "typewriter-effect";
import FeatureGiveway from "../components/feature-giveway";

const LandingPage = async () => {

  const giveway = await getGiveways("6d14edb4-57a6-4f68-a4a5-cce446224cf6", "c163b39a-9290-4ac6-a69f-9bff5b4d9951");
  
  return ( 
    <div className="h-full">
      <div className="text-white font-bold py-16 sm:py-36 text-center space-y-5">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
          <h1>La Mejor Rifa del Momento</h1>
          <LandingHero />
        </div>
        <div className="text-sm md:text-xl font-light text-zinc-400 pb-10 sm:pb-20">
          contenido variado agrrgar info del cliente.
        </div>
      {(giveway != null)? 
        <FeatureGiveway data={giveway}  />
        :
        <h2 className="text-5xl">No hay Sorteos en este momento.</h2>
      }
    </div>
    </div>
   );
}
 
export default LandingPage;