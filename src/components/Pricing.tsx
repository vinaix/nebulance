import React, { useEffect, useRef } from 'react';

const Pricing: React.FC = () => {
  const pricingRef = useRef<HTMLElement>(null);

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

    const elements = pricingRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const pricingTiers = [
    {
      tier: 'Essential',
      price: 99,
      currency: 'INR',
      suffix: 'one-time',
      features: ['5-page website', 'Responsive design', 'Basic SEO', '3 months support'],
      cta: { label: 'Get Started', variant: 'ghost' },
      accent: '#9CA3AF',
      motion: 'slide-from-left'
    },
    {
      tier: 'Professional',
      badge: 'Most Popular',
      price: 149,
      currency: 'INR', 
      suffix: 'one-time',
      features: ['10-page website', 'Custom design', 'Advanced SEO', 'CMS integration', '6 months support'],
      cta: { label: 'Choose Professional', variant: 'primary' },
      accent: '#2563EB',
      motion: 'fade-slide-up',
      highlight: true
    },
    {
      tier: 'Enterprise',
      price: null,
      currency: 'INR',
      suffix: 'Custom Quote',
      features: ['Unlimited pages', 'E-commerce ready', 'Performance optimization', 'Dedicated support'],
      cta: { label: 'Contact Us', variant: 'accent' },
      accent: '#1F2937',
      motion: 'slide-from-right'
    }
  ];

  return (
    <section id="pricing" ref={pricingRef} className="py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="animate-on-scroll opacity-0 translate-y-8 text-5xl font-semibold text-gray-900 mb-6 tracking-[-0.8px] transition-all duration-800">
            Simple, Transparent Pricing
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-8 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-800 delay-200">
            Choose the package that fits your project needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.tier}
              className={`animate-on-scroll opacity-0 translate-y-8 relative backdrop-blur-[16px] bg-white/75 border border-gray-900/8 rounded-xl p-8 hover:shadow-[0_10px_25px_rgba(17,24,39,0.06),0_2px_4px_rgba(17,24,39,0.04)] hover:scale-[1.02] transition-all duration-300 hover:-translate-y-2 ${
                tier.highlight ? 'ring-2 ring-blue-600/20 scale-105 lg:scale-110' : ''
              }`}
              style={{ 
                animationDelay: `${400 + index * 120}ms`
              }}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Tier Name */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-[-0.4px]">
                {tier.tier}
              </h3>

              {/* Price */}
              <div className="mb-8">
                {tier.price ? (
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      ${tier.price.toLocaleString()}
                    </span>
                    <span className="text-gray-600 ml-2">{tier.suffix}</span>
                  </div>
                ) : (
                  <div className="text-4xl font-bold text-gray-900">
                    {tier.suffix}
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block w-full text-center py-3 px-6 rounded-xl font-medium transition-all duration-200 hover:scale-[1.02] ${
                  tier.cta.variant === 'primary' 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-[0_8px_25px_rgba(37,99,235,0.3)]' 
                    : tier.cta.variant === 'accent'
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-transparent text-gray-700 border border-gray-900/12 hover:bg-gray-900/4'
                }`}
              >
                {tier.cta.label}
              </a>
            </div>
          ))}
        </div>

        {/* Notes */}
        <p className="animate-on-scroll opacity-0 translate-y-8 text-center text-gray-600 transition-all duration-800 delay-600">
          All packages include hosting setup, SSL certificate, and basic analytics.
        </p>
      </div>
    </section>
  );
};

export default Pricing;