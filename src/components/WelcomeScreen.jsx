import { useEffect, useState } from "react";

export default function WelcomeScreen({ onFinish, duration = 2500 }) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0); // 👈 NEW

  useEffect(() => {
    // Start progress bar immediately
    setTimeout(() => setProgress(100), 50); // slight delay for transition effect

    const fadeTimer = setTimeout(() => setFadeOut(true), duration - 500);
    const endTimer = setTimeout(() => {
      setVisible(false);
      onFinish && onFinish();
    }, duration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(endTimer);
    };
  }, [duration, onFinish]);

  if (!visible) return null;

  return (
    <>
      {/* Keyframes Inline */}
      <style>{`
        @keyframes fadeIn { 0%{opacity:0;} 100%{opacity:1;} }
        @keyframes scaleIn { 0%{transform:scale(0.92);opacity:0;} 100%{transform:scale(1);opacity:1;} }
        .fade-in { animation: fadeIn 1s ease-out forwards; }
        .scale-in { animation: scaleIn 1.2s ease-out forwards; }
      `}</style>

      <div
        className={`fixed inset-0 flex flex-col justify-center items-center bg-black text-white z-[9999]
          transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}
      >
        {/* Glow */}
        <div className="absolute w-[450px] h-[450px] rounded-full 
                        bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 
                        blur-3xl opacity-25 animate-pulse" />

        {/* Heading */}
        <h1
          className="text-5xl md:text-6xl font-extrabold relative z-10 
                     bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 
                     text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(255,165,0,0.5)]
                    "
        >
          Welcome to Layer<span className="text-white">X</span>
        </h1>

        <p className="mt-8 text-gray-300 text-lg opacity-80 >
          From Vision to Victory – Seamless Design, Prototyping & Production.
        </p>

        <p className="mt-4 text-gray-300 text-lg opacity-80 >
          Precision 3D Printing for Every Vision.
        </p>

        {/* Progress Bar */}
        <div className="w-40 h-1 bg-gray-700 rounded-full mt-10 overflow-hidden">
          <div
            className="h-full bg-orange-500 transition-all duration-[2500ms]"
            style={{ width: `${progress}%` }} // 👈 works now
          ></div>
        </div>
      </div>
    </>
  );
}
