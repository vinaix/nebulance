// src/components/Pricing.tsx (or wherever it lives)

import React, { useEffect, useRef } from "react";

const Pricing: React.FC = () => {
  const pricingRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = pricingRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // MAIN PACKAGES (USD)
  const pricingTiers = [
    {
      tier: "Inbound AI Call Solution",
      price: 1000,
      currency: "USD",
      suffix: "One-time Setup",
      features: [
        "Full-featured AI voice system for inbound calls",
        "Custom call flows and greetings",
        "Call routing and forward-to-human support",
        "Basic analytics and call reports",
        "Ideal for support-focused businesses",
      ],
      cta: { label: "Get Inbound Solution", variant: "ghost" },
      accent: "#9CA3AF",
      motion: "slide-from-left",
    },
    {
      tier: "Complete Inbound + Outbound AI Calling",
      price: 1800,
      currency: "USD",
      suffix: "One-time Setup",
      badge: "Best Value",
      features: [
        "Inbound + outbound AI calling included",
        "Automated outbound follow-ups & reminders",
        "Customisable call scripts and flows",
        "Campaign & support analytics",
        "Perfect for end-to-end automation",
      ],
      cta: { label: "Get Complete Solution", variant: "primary" },
      accent: "#2563EB",
      motion: "fade-slide-up",
      highlight: true,
    },
    {
      tier: "Enterprise Custom AI Voice System",
      price: null,
      currency: "USD",
      suffix: "Custom Quote",
      features: [
        "Fully customised AI calling system",
        "Advanced multi-department call flows",
        "Large-scale outbound campaigns",
        "Integration with CRM / ERP / internal APIs",
        "Dedicated enterprise support",
      ],
      cta: { label: "Contact for Quote", variant: "accent" },
      accent: "#1F2937",
      motion: "slide-from-right",
    },
  ];

  // ADDITIONAL AI SERVICES (USD)
  const additionalServices = [
    {
      title: "WhatsApp Chatbot with AI Integration",
      price: 250,
      suffix: "One-time Setup",
      features: [
        "AI-powered WhatsApp chatbot",
        "Automated responses & engagement",
        "24/7 customer query handling",
      ],
      gradient: "from-pink-500 via-pink-400 to-pink-500",
    },
    {
      title: "AI Appointment Booking System",
      price: 250,
      suffix: "One-time Setup",
      features: [
        "Intelligent appointment scheduling",
        "CRM integration included",
        "WhatsApp integration for seamless booking",
        "Automated reminders & confirmations",
      ],
      gradient: "from-sky-500 via-sky-400 to-cyan-400",
    },
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
            Choose the package that fits your AI call automation needs.
          </p>
        </div>

        {/* Main Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.tier}
              className={`animate-on-scroll opacity-0 translate-y-8 relative backdrop-blur-[16px] bg-white/75 border border-gray-900/8 rounded-xl p-8 hover:shadow-[0_10px_25px_rgba(17,24,39,0.06),0_2px_4px_rgba(17,24,39,0.04)] hover:scale-[1.02] transition-all duration-300 hover:-translate-y-2 ${tier.highlight
                ? "ring-2 ring-blue-600/20 scale-105 lg:scale-110"
                : ""
                }`}
              style={{
                animationDelay: `${400 + index * 120}ms`,
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
                {tier.price !== null && tier.price !== undefined ? (
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">
                      ${tier.price.toLocaleString("en-US")}
                    </span>
                    <span className="text-gray-600 ml-2 text-sm">
                      {tier.suffix}
                    </span>
                  </div>
                ) : (
                  <div className="text-2xl font-bold text-gray-900">
                    {tier.suffix}
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-gray-600"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block w-full text-center py-3 px-6 rounded-xl font-medium transition-all duration-200 hover:scale-[1.02] ${tier.cta.variant === "primary"
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-[0_8px_25px_rgba(37,99,235,0.3)]"
                  : tier.cta.variant === "accent"
                    ? "bg-gray-900 text-white hover:bg-gray-800"
                    : "bg-transparent text-gray-700 border border-gray-900/12 hover:bg-gray-900/4"
                  }`}
              >
                {tier.cta.label}
              </a>
            </div>
          ))}
        </div>

        {/* Additional AI Services */}
        <div className="mt-20">
          <h3 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Additional AI Services
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className={`rounded-2xl p-8 text-white bg-gradient-to-r ${service.gradient} shadow-lg`}
              >
                <div className="flex items-start justify-between mb-6">
                  <h4 className="text-xl font-semibold max-w-xs">
                    {service.title}
                  </h4>
                  <div className="text-right">
                    <div className="text-2xl font-bold">
                      ${service.price.toLocaleString("en-US")}
                    </div>
                    <div className="text-sm opacity-90">
                      {service.suffix}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 text-sm md:text-base">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="mr-2 text-lg leading-none">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Notes */}
        <p className="animate-on-scroll opacity-0 translate-y-8 text-center text-gray-600 transition-all duration-800 delay-600 mt-12">
          All setups include onboarding support, basic analytics, and
          integration assistance. Custom pricing is available for enterprise and
          high-volume businesses.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
