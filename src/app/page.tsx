'use client';

import { useState, useEffect, useRef } from "react";
import SceneWrap from "./components/SceneWrap";
import Image from "next/image";
import Link from "next/link";
import ZoomImg from "./components/zoomImg";

export default function Home() {
  // State to track if the music is currently playing
  const [isPlaying, setIsPlaying] = useState(false);

  // State to track if the button was pressed for the first time
  const [isStarted, setIsStarted] = useState(false);

  // Reference to store the audio object
  const audioRef = useRef(null);

  // useEffect runs once after component mounts
  useEffect(() => {
    // Create a new Audio object and assign to ref
    audioRef.current = new Audio("/music.mp3");
    audioRef.current.loop = true; // enable looping

    // Clean up audio on component unmount
    return () => {
      audioRef.current.pause();
    };
  }, []);

  // Function to handle toggling music play/pause
  const toggleMusic = () => {
    if (!audioRef.current) return;

    // First time button click - start music and mark as started
    if (!isStarted) {
      audioRef.current.play();
      setIsStarted(true);
      setIsPlaying(true);
    } else {
      // Toggle between play and pause
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      {/* Header with navigation and music button */}
      <header className="header px-6 backdrop-blur-sm">
        <nav className="flex items-center justify-between header-container">

          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Image className="header-img" src='/logo.svg' alt="Logo" width={170} height={100} />
          </div>

          {/* Navigation links and music toggle button */}
          <div className="header-nav-wrapper justify-between items-center flex">

            {/* Navigation list */}
            <ul className="header-list flex space-x-6 px-10">
              <li>
                <Link href="#" className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-100 ease-in-out">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-100 ease-in-out">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-blue-400 cursor-pointer transition-colors duration-100 ease-in-out">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Music toggle button */}
            <button
              onClick={toggleMusic}
              className="music-button border text-white rounded cursor-pointer"
            >
              {/* Show "Music" initially, then toggle between "Pause" and "Play" */}
              {!isStarted ? "Music" : isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </nav>
      </header>

      {/* Main scroll page container */}
      <div className="scroll-page h-[800vh] relative z-[-100]">

        {/* Fixed radial gradient background */}
        <div className="fixed z-[-25] top-0 h-screen w-full bg-[radial-gradient(circle,_rgba(0,0,0,1)_0%,_rgba(0,0,100,2)_100%)]" />

        {/* Three.js / R3F Scene */}
        <div className="sceneWrap fixed z-[-10] top-0 h-screen w-full">
          <SceneWrap />
        </div>

        {/* Content displayed over scene (visible on md and above) */}
        <div className="up z-10 w-full absolute overflow-hidden">

          {/* PAGE 1 */}
          <div className="page h-screen">
            <div className="container m-auto flex flex-col justify-end items-end h-[100vh]">
              <p className="text-white lg:w-2xl px-2.5 text-[1rem] lg:text-2xl mb-20">
                The Mercedes-Benz S-Class W223 is the pinnacle of German automotive engineering — but when Brabus takes over, it transforms into a bespoke masterpiece. The Brabus 223 Long edition adds power, elegance, and exclusivity to an already iconic luxury sedan.
              </p>
            </div>
          </div>

          {/* PAGE 2 */}
          <div className="car-power-wrapper page h-400">
            <div className="container car-power">
              <div className="car-power-info">
                <h2>It all comes together</h2>
                <p>
                  Under the hood, the Brabus 600 is powered by a tuned 4.0L twin-turbocharged V8 engine, pushing out 600 hp and 800 Nm of torque.
                </p>
                <p className="mt-4">
                  It reaches 0-100 km/h in just 3.2 seconds, despite its full-size luxury body. Brabus upgrades also include carbon fiber body elements, sportier suspension, and forged wheels.
                </p>
              </div>
              <div className="car-power-stats">
                <p><strong>3.2 secs</strong><br /> 0 - 100 KM/H</p>
                <p><strong>9.7 secs</strong><br /> 0 - 200 KM/H</p>
                <p><strong>690</strong><br /> HorsePower</p>
                <p><strong>250</strong><br />Max MPH</p>
              </div>
            </div>
          </div>

          {/* PAGE 3 */}
          <div className="page h-screen" />

          {/* PAGE 4 */}
          <div className="page h-screen">
            <div className="container m-auto flex flex-col justify-end items-end h-[50vh]">
              <p className="text-white lg:w-2xl px-2.5 md:text-[1rem] lg:text-xl">
                The Brabus 223 Long is more than a car — it’s a statement of status, innovation, and presence. Built for those who demand the absolute best in comfort and power, it blends executive-class elegance with Brabus' bold performance DNA. Whether on city streets or autobahns, it turns heads and commands respect.
              </p>
            </div>
          </div>

          {/* PAGE 5-7 (empty) */}
          <div className="page h-screen">
            <ZoomImg />
          </div>
          <div className="page h-screen" />
        </div>

        {/* Content below scene */}
        <div className="down z-[-20] w-full absolute overflow-hidden">

          {/* PAGE 1 */}
          <div className="page h-screen">
            <div className="container m-auto flex flex-col justify-center h-[50vh]">
              <h4 className="lg:text-[5rem] text-[3rem] text-white font-bold pl-3">Mercedes 223 Long</h4>
              <h1 className="text-[6rem] pl-3 lg:text-[16rem] leading-10 mb-10 lg:mb-0 lg:leading-44 text-white font-bold">Brabus</h1>
            </div>
          </div>

          {/* PAGE 2 */}
          <div className=" page h-screen">
            <div className="container m-auto flex flex-col justify-center items-center h-[50vh]">
              <h1 className="text-[6rem] lg:text-[8rem] leading-10 mb-10 lg:mb-0 lg:leading-44 text-white font-bold">V8 BiTurbo</h1>
              <h4 className="text-[5rem] text-white font-bold">600 HP</h4>
            </div>
          </div>

          {/* PAGE 3 */}
          <div className="page h-screen" />

          {/* PAGE 4 */}
          <div className="page h-screen">
            <div className="container m-auto flex flex-col justify-center items-end h-[50vh]">
              <h4 className="xl:text-[5rem] text-[2rem] text-white font-bold mt-80">German</h4>
              <h1 className="text-[6rem] leading-none xl:text-[14rem] mb-10 xl:mb-0 xl:leading-44 text-white font-bold">Excellence</h1>
            </div>
          </div>

          {/* PAGE 5-7 (empty) */}
          <div className="page h-screen" />
          <div className="page h-screen" />
          <div className="page h-screen" />

          {/* PAGE 8 (final quote) */}
          <div className="page h-screen">
            <div className="container m-auto flex flex-col justify-center items-center h-[50vh]">
              <h4 className="text-[1rem] lg:text-[4rem] text-white font-bold">
                The Brabus 223 isn’t just a car
              </h4>
              <h1 className="text-[1rem] lg:text-[2.7rem] leading-none text-center lg:leading-20 text-white font-bold mb-20">
                "it’s a fusion of power, prestige, and uncompromising craftsmanship."
              </h1>
            </div>
          </div>
          <footer className="down footer px-6 backdrop-blur-sm">
            <nav className="flex items-center justify-between header-container">
              <div className="footer-author flex-shrink-0 text-white text-[13px]">
                <p>© 2025 Mercedes 223 Long Brabus</p>
                <p>© All Rights Reserved by Unfor Dev</p>
              </div>

              {/* Logo */}
              <div className="flex-shrink-0 cursor-pointer">
                <Image className="header-img" src='/logo.svg' alt="Logo" width={170} height={100} />
              </div>
            </nav>
      </footer>
        </div>
      </div>
    </>
  );
}
