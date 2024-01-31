import React from "react";
import Net from "vanta/dist/vanta.net.min";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styles from "./anime.module.css";
function HomePage() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        Net({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: "#4d7db7",
          backgroundAlpha: 0,
          points: 10.0,
          maxDistance: 20.0,
          spacing: 17.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef} className={styles.backgroundAnime}>
      <div className="flex flex-col items-center justify-center h-screen px-4 sm:px-6 lg:px-8">
        <p className="text-slate-900 font-weight-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-center dark:text-white">
          Visualization of Wi-Fi data <br />
          in the form of multiple graphs and diagrams
        </p>
        <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
          SZN Visualization is a website that displays data about different
          network equipment, including performance, communication with different
          applications. And also visualizes wireless data in 2D and 3D format.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
