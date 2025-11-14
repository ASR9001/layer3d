import { useEffect, useState } from "react";

export default function WelcomeScreen({ onFinish }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide after 2.5 seconds
    const timer = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white z-[9999] overflow-hidden">
      {/* Animated glow ring */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 blur-3xl opacity-30 animate-pulse" />

      {/* Logo or Text */}
      <h1 className="text-5xl md:text-6xl font-extrabold relative z-10 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,165,0,0.5)] animate-fade-in">
        Welcome to Layer<span className="text-white">X</span>
      </h1>

      <p className="mt-4 text-gray-300 text-lg animate-fade-in opacity-80">
        Precision 3D Printing for Every Vision
      </p>

      {/* Progress Bar */}
      <div className="w-40 h-1 bg-gray-700 rounded-full mt-8 overflow-hidden">
        <div className="h-full bg-orange-500 animate-progress"></div>
      </div>
    </div>
  );
}
