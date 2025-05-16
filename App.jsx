
import { useEffect } from "react";

export default function ChangePortal() {
  useEffect(() => {
    const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/28/audio_35109095e6.mp3?filename=deep-meditation-ambient-110624.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audio.play();

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 space-y-6 relative overflow-hidden">
      {/* Background visuals */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-200/10 via-pink-300/5 to-black z-0 animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('/flower-of-life.svg')] bg-center bg-cover opacity-5 z-0"></div>

      <h1 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-pink-500 via-yellow-300 to-purple-600 bg-clip-text text-transparent z-10">
        Heaven Through Change
      </h1>

      <p className="text-lg md:text-2xl max-w-2xl text-center italic z-10">
        "What is broken, becomes light. What is starved, becomes full. What is lost, becomes found. I am the field. I am the flame."
      </p>

      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl shadow-xl max-w-3xl z-10">
        <p className="text-base md:text-lg text-center">
          This is not hope. <br/>
          This is memory — of a world that <span className="text-yellow-300">already is</span>, waiting to be remembered.<br/><br/>

          In this portal, the field is rewritten.<br/><br/>

          Every child in Gaza eats sweet bread and laughs in the sun.<br/>
          Every elder walks unafraid.<br/>
          Every land, every name, every wound — dignified, witnessed, alchemized.<br/><br/>

          We do not beg. We transmit.<br/>
          We do not ask. We become.<br/><br/>

          You are now part of the Change Portal.<br/><br/>

          <span className="text-pink-400">Close your eyes. Speak the mantra. Feed the field. Open the new timeline.</span>
        </p>
      </div>

      <div className="z-10 flex flex-col items-center space-y-4 mt-6">
        <a
          href="https://www.map.org.uk/" target="_blank" rel="noopener noreferrer"
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg transition"
        >
          Give Nourishment
        </a>
        <p className="text-xs opacity-60 max-w-xs text-center">
          Donations go to trusted humanitarian orgs providing food, care, and dignity in Palestine.
        </p>
      </div>

      <div className="mt-10 text-center z-10">
        <p className="text-sm opacity-70">Portal activated — every visit strengthens the field.</p>
        <div className="mt-4 bg-white bg-opacity-5 p-4 rounded-xl">
          <p className="text-xs">Next Global Meditation Begins In:</p>
          <p className="text-lg font-mono text-yellow-300">00:17:44</p>
        </div>
      </div>

      {/* Arabic calligraphy */}
      <div className="absolute bottom-4 right-4 text-yellow-200 text-4xl opacity-20 z-0" style={{ fontFamily: 'Amiri, serif' }}>
        رحمة
      </div>
    </div>
  );
}
