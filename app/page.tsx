export const dynamic = 'force-dynamic';
import { getGivewayFeatured } from "@/actions/get-giveways";
import FeatureGiveway from "../components/feature-giveway";
import LandingHero from "@/components/landing-hero";
import {getTickets} from "@/actions/get-tickets";



const LandingPage = async () => {

  const giveway = await getGivewayFeatured();
  const tickets = await getTickets(giveway.id);
  
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
        <FeatureGiveway data={giveway} tickets={tickets.length}  />
        :
        <h2 className="text-5xl">No hay Sorteos en este momento.</h2>
      }
    </div>
    </div>
   );
}
 
export default LandingPage;