import React, { useEffect, useRef } from 'react';
import { LayoutGrid, Palette, Rocket, Search, Shield, TrendingUp } from 'lucide-react';

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = servicesRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: LayoutGrid,
      title: 'Web Development',
      description: 'Fast, responsive websites built with modern frameworks and clean architecture.',
      bullets: ['React & Next.js', 'Performance optimized', 'Mobile-first design'],
      motion: 'slide-from-left'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful interfaces that prioritize user experience and accessibility.',
      bullets: ['Design systems', 'User research', 'Prototyping'],
      motion: 'fade-slide-up'
    },
    {
      icon: Rocket,
      title: 'Deployment',
      description: 'Seamless launches with CI/CD, monitoring, and ongoing maintenance.',
      bullets: ['Cloud hosting', 'SSL certificates', '24/7 monitoring'],
      motion: 'slide-from-right'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Technical SEO implementation for better search visibility.',
      bullets: ['Core Web Vitals', 'Schema markup', 'Site speed'],
      motion: 'slide-from-left'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Robust security measures to protect your site and users.',
      bullets: ['SSL/TLS', 'Security headers', 'Regular updates'],
      motion: 'fade-slide-up'
    },
    {
      icon: TrendingUp,
      title: 'Analytics',
      description: 'Data-driven insights to understand and improve user engagement.',
      bullets: ['Custom dashboards', 'Performance metrics', 'User behavior'],
      motion: 'slide-from-right'
    },
    // ✅ NEW SERVICE
    {
      icon: Rocket,
      title: 'AI Call System Setup',
      description: 'End-to-end setup of inbound and outbound AI calling workflows for your business.',
      bullets: [
        'Custom AI call flows & prompts',
        'Integration with CRMs and tools',
        'Testing, monitoring & optimisation'
      ],
      motion: 'fade-slide-up'
    }
  ];

  return (
    <section id="services" ref={servicesRef} className="py-32 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `radial-gradient(circle at 1.5px 1.5px, rgba(17,24,39,0.08) 1px, transparent 0)`,
            backgroundSize: '12px 12px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="animate-on-scroll opacity-0 translate-y-8 text-5xl font-semibold text-gray-900 mb-6 tracking-[-0.8px] transition-all duration-800">
            Our Services
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-8 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-800 delay-200">
            From concept to launch, we handle every detail with precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="animate-on-scroll opacity-0 translate-y-8 group relative backdrop-blur-[16px] bg-white/75 border border-gray-900/8 rounded-xl p-8 hover:shadow-[0_10px_25px_rgba(17,24,39,0.06),0_2px_4px_rgba(17,24,39,0.04)] hover:scale-[1.02] hover:border-blue-600/12 transition-all duration-300 hover:-translate-y-1.5"
                style={{
                  transitionDelay: `${index * 120}ms`,
                  animationDelay: `${400 + index * 120}ms`
                }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-blue-600/8 rounded-xl flex items-center justify-center group-hover:bg-blue-600/12 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-[-0.4px]">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
