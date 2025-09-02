import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  number: number;
  label: string;
  suffix: string;
}

const Stats: React.FC = () => {
  const statsRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0, 0]);

  const stats: StatItem[] = [
    { number: 150, label: 'Projects Delivered', suffix: '+' },
    { number: 98, label: 'Client Satisfaction', suffix: '%' },
    { number: 24, label: 'Hour Response', suffix: 'h' },
    { number: 5, label: 'Years Experience', suffix: '+' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            animateNumbers();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateNumbers = () => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.number / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(timer);
        }
        setAnimatedNumbers(prev => {
          const newNumbers = [...prev];
          newNumbers[index] = Math.floor(current);
          return newNumbers;
        });
      }, 20);
    });
  };

  return (
    <section 
      id="stats" 
      ref={statsRef}
      className="py-20 relative"
    >
      <div className="max-w-6xl mx-auto px-8">
        <div 
          className="backdrop-blur-[10px] bg-white/50 rounded-2xl p-16"
          style={{
            boxShadow: '0 10px 25px rgba(17,24,39,0.06), 0 2px 4px rgba(17,24,39,0.04)'
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {animatedNumbers[index]}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;