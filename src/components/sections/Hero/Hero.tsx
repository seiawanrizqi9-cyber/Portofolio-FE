import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl">
          <HeroContent />
          <HeroActions />
        </div>
      </div>
    </section>
  );
};

export default Hero;