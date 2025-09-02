import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="landing" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(80% 80% at 30% 20%, rgba(37,99,235,0.02) 0%, rgba(255,255,255,0) 60%),
          #FFFFFF
        `
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Geometric Dots Pattern */}
        <div 
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `radial-gradient(circle at 1.5px 1.5px, rgba(17,24,39,0.08) 1px, transparent 0)`,
            backgroundSize: '12px 12px',
            transform: 'translate(2px, 2px)'
          }}
        />
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-600/3 rounded-full animate-float-slow" />
        <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-blue-600/2 rounded-full animate-float-slower" />
        <div className="absolute top-1/2 left-3/4 w-8 h-8 bg-blue-600/4 rounded-full animate-float-fast" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        {/* Eyebrow */}
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-800 delay-100">
          <span className="inline-flex items-center px-4 py-2 bg-blue-600/8 text-blue-600 border border-blue-600/15 rounded-full text-sm font-medium">
            Premium Digital Craftsmanship
          </span>
        </div>

        {/* Main Title */}
        <h1 
          className="animate-on-scroll opacity-0 translate-y-8 mt-8 text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.02] tracking-[-1.8px] transition-all duration-1000 delay-300"
          style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
        >
          We transform concepts into{' '}
          <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            exceptional digital experiences
          </span>
          .
        </h1>

        {/* Subtitle */}
        <p className="animate-on-scroll opacity-0 translate-y-8 mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto transition-all duration-800 delay-500">
          Clean code, thoughtful design, and flawless execution. Every project built to last.
        </p>

        {/* CTA Buttons */}
        <div className="animate-on-scroll opacity-0 translate-y-8 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-800 delay-700">
          <a
            href="#services"
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl border border-blue-600/20 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(17,24,39,0.12)] transition-all duration-200 hover:-translate-y-1 font-medium"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 bg-transparent text-gray-700 border border-gray-900/12 rounded-xl hover:bg-gray-900/4 transition-all duration-200 hover:scale-[1.02] font-medium"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;