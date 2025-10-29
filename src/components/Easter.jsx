import { useState } from "react";
import soccerBall from "/zinedine-zidane-_signed_football-_uefa_champions_league-icons_1.webp";

export default function Easter() {
  const [bounce, setBounce] = useState(false);

  const handleClick = () => {
    setBounce(true);
    setTimeout(() => setBounce(false), 800); // slightly longer for multiple bounces
  };

  return (
    <div
      className="fixed bottom-8 right-8 z-50 cursor-pointer w-16 h-16"
      onClick={handleClick}
    >
      <img
        src={soccerBall}
        alt="Soccer Ball"
        className={`w-full h-full object-contain transition-transform ${
          bounce ? "animate-bounce-real" : ""
        }`}
      />

      <style jsx>{`
        @keyframes bounce-real {
          0%   { transform: translateY(0); }
          20%  { transform: translateY(-80px); }
          35%  { transform: translateY(0); }
          50%  { transform: translateY(-40px); }
          65%  { transform: translateY(0); }
          75%  { transform: translateY(-15px); }
          85%  { transform: translateY(0); }
          100% { transform: translateY(0); }
        }

        .animate-bounce-real {
          animation: bounce-real 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
    </div>
  );
}
