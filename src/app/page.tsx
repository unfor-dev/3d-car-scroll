'use client';
import SceneWrap from "./components/SceneWrap";

export default function Home() {
  return (
    <div className="scroll-page h-[800vh] relative z-[-100]">

      {/* Radial Gradient Background */}
      <div className="fixed z-[-25] top-0 h-screen w-full bg-[radial-gradient(circle,_rgba(0,0,0,1)_0%,_rgba(0,0,100,2)_100%)]" />

      {/* Scene (Three.js / R3F) */}
      <div className="sceneWrap fixed z-[-10] top-0 h-screen w-full">
        <SceneWrap />
      </div>

      {/* Content Over Scene */}
      <div className="up z-10 w-full absolute overflow-hidden hidden md:inline-block">

        {/* PAGE 1 */}
        <div className="page h-screen">
          <div className="container m-auto flex flex-col justify-end items-end h-[100vh]">
            <p className="text-white lg:w-2xl px-2.5 text-[1rem] lg:text-2xl mb-20">
              The Mercedes-Benz S-Class W223 is the pinnacle of German automotive engineering — but when Brabus takes over, it transforms into a bespoke masterpiece. The Brabus 223 Long edition adds power, elegance, and exclusivity to an already iconic luxury sedan.
            </p>
          </div>
        </div>

        {/* PAGE 2 */}
        <div className="page h-screen">
          <div className="container m-auto flex flex-col justify-end items-end h-[100vh]">
            <p className="text-white text-center text-[1rem] lg:text-2xl mb-20">
              Under the hood, the Brabus 600 is powered by a tuned 4.0L twin-turbocharged V8 engine, pushing out 600 hp and 800 Nm of torque. It reaches 0-100 km/h in just 4.5 seconds, despite its full-size luxury body. Brabus upgrades also include carbon fiber body elements, sportier suspension, and forged wheels.
            </p>
          </div>
        </div>

        {/* PAGE 3 */}
        <div className="page h-screen" />

        {/* PAGE 4 */}
        <div className="page h-screen">
          <div className="container m-auto flex flex-col justify-end items-end h-[100vh]">
            <p className="text-white lg:w-2xl px-2.5 md:text-[1rem] lg:text-xl">
              The Brabus 223 Long is more than a car — it’s a statement of status, innovation, and presence. Built for those who demand the absolute best in comfort and power, it blends executive-class elegance with Brabus' bold performance DNA. Whether on city streets or autobahns, it turns heads and commands respect.
            </p>
          </div>
        </div>

        {/* PAGE 5-7 (empty) */}
        <div className="page h-screen" />
        <div className="page h-screen" />
        <div className="page h-screen" />

        {/* PAGE 8 (footer) */}
        <div className="page h-screen">
          <div className="container m-auto flex flex-col justify-end items-center h-[100vh]">
            <p className="text-white text-[4rem] lg:text-3xl mb-10">
              This Website Made by <a href="#" className="underline">Unfor Dev</a>
            </p>
          </div>
        </div>
      </div>

      {/* Content Below Scene */}
      <div className="down z-[-20] w-full absolute overflow-hidden">

        {/* PAGE 1 */}
        <div className="page h-screen">
          <div className="container m-auto flex flex-col justify-center h-[50vh]">
            <h4 className="lg:text-[5rem] text-[3rem] text-white font-bold pl-3">Mercedes 223 Long</h4>
            <h1 className="text-[6rem] pl-3 lg:text-[16rem] leading-10 mb-10 lg:mb-0 lg:leading-44 text-white font-bold">Brabus</h1>
          </div>
        </div>

        {/* PAGE 2 */}
        <div className="page h-screen">
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
      </div>

    </div>
  );
}
