"use client";

import TypewriterComponent from "typewriter-effect";

const LandingHero = () => {
  return (
    <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Sorteos semanales.",
                "Gana muy fácil.",
                "Compra tu Boleta ya!!."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
  );
};

export default LandingHero;