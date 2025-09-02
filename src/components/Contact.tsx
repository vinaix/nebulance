import React, { useState, useEffect, useRef } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  project: string;
}

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    project: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    const elements = contactRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', project: '' });
      
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" ref={contactRef} className="py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-600/3 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div 
          className="absolute inset-0 opacity-2"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(17,24,39,0.02) 1px, transparent 1px), linear-gradient(rgba(17,24,39,0.02) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div className="animate-on-scroll opacity-0 -translate-x-12 transition-all duration-700">
            <h2 className="text-5xl font-semibold text-gray-900 mb-6 tracking-[-0.8px]">
              Ready to Start?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                <p className="text-gray-600">hello@nebulance.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                <p className="text-gray-600">{"< 24 hours"}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Free Consultation</h4>
                <p className="text-gray-600">30 minutes</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="animate-on-scroll opacity-0 translate-x-12 transition-all duration-700 delay-200">
            <div 
              className="backdrop-blur-[16px] bg-white/75 border border-gray-900/8 rounded-xl p-8"
              style={{
                boxShadow: '0 10px 25px rgba(17,24,39,0.06), 0 2px 4px rgba(17,24,39,0.04)'
              }}
            >
              {!isSubmitted ? (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      autoComplete="name"
                      placeholder="your name"
                      className="w-full px-4 py-3 backdrop-blur-[16px] bg-white/80 border border-gray-900/12 rounded-xl text-gray-900 placeholder-gray-900/50 focus:outline-none focus:ring-[3px] focus:ring-blue-600/8 focus:border-blue-600/30 hover:scale-[1.01] hover:shadow-sm transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      autoComplete="email"
                      pattern=".+@.+\..+"
                      placeholder="ur Mail"
                      className="w-full px-4 py-3 backdrop-blur-[16px] bg-white/80 border border-gray-900/12 rounded-xl text-gray-900 placeholder-gray-900/50 focus:outline-none focus:ring-[3px] focus:ring-blue-600/8 focus:border-blue-600/30 hover:scale-[1.01] hover:shadow-sm transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      autoComplete="organization"
                      placeholder="Your Company"
                      className="w-full px-4 py-3 backdrop-blur-[16px] bg-white/80 border border-gray-900/12 rounded-xl text-gray-900 placeholder-gray-900/50 focus:outline-none focus:ring-[3px] focus:ring-blue-600/8 focus:border-blue-600/30 hover:scale-[1.01] hover:shadow-sm transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-gray-900 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      maxLength={2000}
                      placeholder="Tell us about your vision, timeline, and requirements..."
                      className="w-full px-4 py-3 backdrop-blur-[16px] bg-white/80 border border-gray-900/12 rounded-xl text-gray-900 placeholder-gray-900/50 focus:outline-none focus:ring-[3px] focus:ring-blue-600/8 focus:border-blue-600/30 hover:scale-[1.01] hover:shadow-sm transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-medium hover:scale-[1.03] hover:shadow-[0_8px_25px_rgba(37,99,235,0.3)] hover:-translate-y-1.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="animate-on-scroll opacity-0 translate-y-8 text-center text-gray-600 mt-8 transition-all duration-800 delay-800">
          All packages include hosting setup, SSL certificate, and basic analytics.
        </p>
      </div>
    </section>
  );
};

export default Contact;