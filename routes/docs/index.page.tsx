import React from 'react';
import { Link } from 'react-router-dom';

export default function DocsPage(): React.ReactElement {
  const sections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Scaffold a Portal app and get it running in minutes — installation, file-based routing, your app contract, and the dev server.',
      href: '/docs/getting-started',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'app-contracts',
      title: 'App Contracts',
      description: 'The living contract that governs your app — goals, brand, SEO, conversion, policies, and quality gates every agent change is checked against.',
      href: '/docs/app-contracts',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'cli-reference',
      title: 'CLI Reference',
      description: 'Every Portal command for development, auditing, code generation, patches, and deployment — with flags and examples.',
      href: '/docs/cli-reference',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 'agent-sentinel',
      title: 'Agent & Sentinel',
      description: 'How the Runner generates code and the Sentinel reviews each patch against your contract before it is applied.',
      href: '/docs/agent-sentinel',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header */}
      <div className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Documentation
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Everything you need to build, audit, and ship your Portal apps.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        {/* Quick Links Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.href}
              className="group relative overflow-hidden rounded-lg border border-slate-700 bg-slate-900 p-8 transition-all hover:border-slate-600 hover:bg-slate-800"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 transition-opacity group-hover:opacity-10`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className={`inline-flex rounded-lg bg-gradient-to-br ${section.color} p-3 mb-4`}>
                      <span className="h-6 w-6 text-white text-lg font-bold">{section.title.charAt(0)}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-50 group-hover:text-white transition-colors">
                      {section.title}
                    </h2>
                    <p className="mt-3 text-slate-400 group-hover:text-slate-300 transition-colors">
                      {section.description}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="mt-6 flex items-center text-slate-400 group-hover:text-slate-200 transition-colors">
                  <span className="text-sm font-medium">Explore</span>
                  <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 rounded-lg border border-slate-700 bg-slate-900 p-8">
          <h3 className="text-xl font-bold text-slate-50 mb-4">Quick Pointers</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <h4 className="font-semibold text-slate-200 mb-2">Scaffold a project</h4>
              <p className="text-sm text-slate-400">
                Run <code className="rounded bg-slate-800 px-1 text-blue-300">npm create @interchained/portal-app@latest</code> to start from a template.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-200 mb-2">Validate your contract</h4>
              <p className="text-sm text-slate-400">
                Run <code className="rounded bg-slate-800 px-1 text-blue-300">portal contract validate</code> to check your app contract.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-200 mb-2">Audit before shipping</h4>
              <p className="text-sm text-slate-400">
                Run <code className="rounded bg-slate-800 px-1 text-blue-300">portal audit</code> to enforce your quality gates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
