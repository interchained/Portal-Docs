import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0F] via-[#0A0A0F] to-[#1a1a2e]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0F]/80 backdrop-blur-md border-b border-[#7C3AED]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
            Portal
          </div>
          <div className="flex gap-8 items-center">
            <a href="#features" className="text-gray-300 hover:text-[#06B6D4] transition">Features</a>
            <a href="#sentinel" className="text-gray-300 hover:text-[#06B6D4] transition">Sentinel</a>
            <Link to="/docs" className="px-4 py-2 rounded-lg bg-[#7C3AED] hover:bg-[#7C3AED]/80 text-white transition">
              Docs
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#06B6D4] text-sm font-medium">
              ✨ Build with React + TypeScript
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block mb-2 text-white">The Modern</span>
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#7C3AED] bg-clip-text text-transparent animate-pulse">
              Portal Framework
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Build production-grade React applications with TypeScript, Tailwind CSS, and intelligent routing. Deploy faster. Scale effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/docs" className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white font-semibold hover:shadow-lg hover:shadow-[#7C3AED]/50 transition transform hover:scale-105">
              Get Started
            </Link>
            <Link to="/docs" className="px-8 py-4 rounded-lg border border-[#7C3AED]/50 text-[#06B6D4] font-semibold hover:bg-[#7C3AED]/10 transition">
              View Docs
            </Link>
          </div>

          {/* NPM Command */}
          <div className="bg-[#1a1a2e] border border-[#7C3AED]/20 rounded-lg p-6 inline-block">
            <code className="text-[#06B6D4] font-mono text-sm">
              npm create @interchained/portal-app@latest my-app
            </code>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Vite-powered builds with instant HMR. Ship code faster than ever before.'
              },
              {
                icon: '🎨',
                title: 'Beautiful UI',
                description: 'Tailwind CSS with built-in components. Design systems included.'
              },
              {
                icon: '🔒',
                title: 'Type Safe',
                description: 'Full TypeScript support. Catch errors before runtime.'
              },
              {
                icon: '🚀',
                title: 'Production Ready',
                description: 'Battle-tested patterns. Deploy with confidence.'
              },
              {
                icon: '🔄',
                title: 'State Management',
                description: 'Integrated data fetching. State management made simple.'
              },
              {
                icon: '📱',
                title: 'Responsive Design',
                description: 'Mobile-first approach. Works everywhere.'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-lg bg-gradient-to-br from-[#1a1a2e] to-[#0A0A0F] border border-[#7C3AED]/20 hover:border-[#06B6D4]/50 transition group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sentinel Flow Section */}
      <section id="sentinel" className="py-20 px-6 bg-gradient-to-b from-transparent via-[#7C3AED]/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
              Sentinel Flow
            </span>
          </h2>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Monitor',
                description: 'Real-time insights into your application performance and user behavior.'
              },
              {
                step: '02',
                title: 'Analyze',
                description: 'Intelligent pattern detection. Identify issues before they impact users.'
              },
              {
                step: '03',
                title: 'Optimize',
                description: 'Automated recommendations. Improve performance with one click.'
              },
              {
                step: '04',
                title: 'Deploy',
                description: 'Seamless deployment pipeline. Zero-downtime updates.'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#06B6D4]">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">
            Ready to build something
            <span className="block bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent">
              extraordinary?
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join developers building the next generation of web applications with Portal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/docs" className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] text-white font-semibold hover:shadow-lg hover:shadow-[#7C3AED]/50 transition transform hover:scale-105">
              Start Building Now
            </Link>
            <Link
              to="/docs"
              className="px-8 py-4 rounded-lg border border-[#7C3AED]/50 text-[#06B6D4] font-semibold hover:bg-[#7C3AED]/10 transition inline-block"
            >
              Read Documentation
            </Link>
          </div>

          <p className="text-gray-500 text-sm">
            Free to get started. No credit card required.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#7C3AED]/20 py-12 px-6 bg-[#0A0A0F]/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Portal</h4>
              <p className="text-gray-400 text-sm">The modern framework for React applications.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#features" className="hover:text-[#06B6D4] transition">Features</a></li>
                <li><Link to="/docs" className="hover:text-[#06B6D4] transition">Docs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#06B6D4] transition">GitHub</a></li>
                <li><a href="#" className="hover:text-[#06B6D4] transition">Discord</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#06B6D4] transition">Privacy</a></li>
                <li><a href="#" className="hover:text-[#06B6D4] transition">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#7C3AED]/20 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Portal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
