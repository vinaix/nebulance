import React from 'react';

const Footer: React.FC = () => {
  const footerColumns = [
    {
      title: 'Nebulance',
      items: ['Premium web development and design']
    },
    {
      title: 'Services', 
      items: [
        { label: 'Web Development', href: '#services' },
        { label: 'UI/UX Design', href: '#services' },
        { label: 'SEO Optimization', href: '#services' }
      ]
    },
    {
      title: 'Company',
      items: [
        { label: 'About', href: '#about' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Connect',
      items: [
        'hello@nebulance.com',
        '© 2025 Nebulance Agency'
      ]
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-900/8 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerColumns.map((column) => (
            <div key={column.title}>
              {column.title === 'Nebulance' ? (
                <div>
                  <h4 className="text-xl font-bold text-blue-600 mb-4 tracking-[-1.2px]">
                    NEBULANCE
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {column.items[0]}
                  </p>
                </div>
              ) : (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">
                    {column.title}
                  </h4>
                  <ul className="space-y-2">
                    {column.items.map((item) => (
                      <li key={typeof item === 'string' ? item : item.label}>
                        {typeof item === 'string' ? (
                          <span className="text-gray-600 text-sm">{item}</span>
                        ) : (
                          <a
                            href={item.href}
                            className="text-gray-600 text-sm hover:text-blue-600 transition-colors duration-200"
                          >
                            {item.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;