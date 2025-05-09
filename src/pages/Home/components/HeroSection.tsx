import coworking from "../../../assets/videos/coworking.mp4";
import heroBackground from "../../../assets/images/hero-background.png";
import hexagonBg from "../../../assets/images/hexagon-bg.png";

export default function HeroSection() {
  return (
    <section className="relative mb-6">
      {/* Hexagon overlay */}
      <div className="w-[85%] md:w-fit z-30 md:-top-5 right-0 absolute">
        <img src={hexagonBg} alt="Overlay" className="" />
      </div>

      <div className="container mx-auto py-0 md:py-16 z-10">
        <div className="flex flex-col flex-col-reverse md:flex-row items-center justify-between">
          {/* Text content with background */}
          <div className="md:w-2/3 relative md:static">
            <div
              className="absolute inset-0 md:w-2/3 opacity-70 md:opacity-40"
              style={{
                backgroundImage: `url(${heroBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-white/0 to-white/55"></div>
            </div>
            {/* Text content Desktop */}
            <h1 className="max-w-[80%] text-h1 font-bold xl:leading-[4.5rem] mb-4 relative hidden md:block">
              Host your meeting with world-class amenities. Starting at{" "}
              <span className="text-yellow-500">₹199/-!</span>
            </h1>

            {/* Text content Mobile */}
            <div className="h-[100px] flex justify-center items-center md:hidden px-4 relative">
              <h1 className="text-xl font-semibold leading-tight text-center">
                Host your meeting with world-class amenities. Starting at{" "}
                <span className="text-yellow-500">₹199/-!</span>
              </h1>
            </div>
          </div>

          <div className="flex flex-col justify-center md:justify-end relative">
            {/* Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto md:max-w-[450px] relative opacity-90"
            >
              <source src={coworking} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
