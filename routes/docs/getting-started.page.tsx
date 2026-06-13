import React from 'react';
import { Link } from 'react-router-dom';

const GettingStartedPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link to="/" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mt-4 text-white">Getting Started</h1>
          <p className="text-slate-400 mt-2">Build your first Portal app in minutes</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Installation Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">1</div>
            <h2 className="text-2xl font-bold text-white">Installation</h2>
          </div>

          <p className="text-slate-300 mb-6">
            Scaffold a new project with the official create tool. It generates a Portal app with TypeScript, Tailwind CSS, Vite, and file-based routing pre-configured.
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-6 font-mono text-sm">
            <div className="text-slate-400 mb-2">$ npm create @interchained/portal-app@latest my-app</div>
            <div className="text-slate-500 text-xs mt-4">Runs <span className="text-slate-300">@interchained/create-portal-app</span> and writes a new project into <span className="text-slate-300">my-app/</span>.</div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 font-mono text-sm">
            <div className="text-slate-400 mb-2">$ cd my-app</div>
            <div className="text-slate-400 mb-2">$ npm install</div>
            <div className="text-slate-500 text-xs mt-4">Install dependencies and you are ready to develop.</div>
          </div>
        </section>

        {/* Project Structure Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">2</div>
            <h2 className="text-2xl font-bold text-white">Project Structure</h2>
          </div>

          <p className="text-slate-300 mb-6">
            Portal uses file-based routing. Every <code className="bg-slate-900 px-2 py-1 rounded text-blue-300">*.page.tsx</code> file in the <code className="bg-slate-900 px-2 py-1 rounded text-blue-300">routes</code> directory automatically becomes a route.
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 font-mono text-sm space-y-2 mb-6">
            <div className="text-slate-300">my-app/</div>
            <div className="text-slate-400 ml-4">├── routes/</div>
            <div className="text-slate-400 ml-8">├── index.page.tsx <span className="text-slate-600">→ /</span></div>
            <div className="text-slate-400 ml-8">├── about.page.tsx <span className="text-slate-600">→ /about</span></div>
            <div className="text-slate-400 ml-8">└── blog/</div>
            <div className="text-slate-400 ml-12">├── index.page.tsx <span className="text-slate-600">→ /blog</span></div>
            <div className="text-slate-400 ml-12">└── [slug].page.tsx <span className="text-slate-600">→ /blog/:slug</span></div>
            <div className="text-slate-400 ml-4">├── src/</div>
            <div className="text-slate-400 ml-8">├── main.tsx</div>
            <div className="text-slate-400 ml-8">└── index.css</div>
            <div className="text-slate-400 ml-4">├── app.contract.ts</div>
            <div className="text-slate-400 ml-4">├── vite.config.ts</div>
            <div className="text-slate-400 ml-4">├── index.html</div>
            <div className="text-slate-400 ml-4">└── package.json</div>
          </div>

          <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4 mb-6">
            <p className="text-blue-200 text-sm">
              <strong>Dynamic Routes:</strong> Use square brackets like <code className="bg-slate-900 px-2 py-1 rounded">[slug].page.tsx</code> for dynamic segments. Access params with <code className="bg-slate-900 px-2 py-1 rounded">useParams()</code> from <code className="bg-slate-900 px-2 py-1 rounded">@interchained/portal-react</code>.
            </p>
          </div>
        </section>

        {/* App Contract Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">3</div>
            <h2 className="text-2xl font-bold text-white">Define Your Contract</h2>
          </div>

          <p className="text-slate-300 mb-6">
            The <code className="bg-slate-900 px-2 py-1 rounded text-blue-300">app.contract.ts</code> file at your project root declares your app&apos;s goals, brand, policies, and per-page intent. Agents check every change against it. See the <Link to="/docs/app-contracts" className="text-blue-400 hover:text-blue-300">App Contracts</Link> reference for every field.
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 font-mono text-sm mb-6 overflow-x-auto">
            <pre className="text-slate-300">{`// app.contract.ts
import { defineApp } from "@interchained/portal-contract";

export default defineApp({
  name: "My App",
  goals: [
    "Deliver value to visitors quickly",
    "Communicate clearly and honestly",
  ],
  brand: {
    voice: "clear, professional, helpful",
    colors: ["#0f172a", "#6366f1", "#f8fafc"],
  },
  policies: {
    auth: "none",
    publishing: "human_review",
    accessibility: "basic",
  },
  pages: [
    {
      route: "/",
      purpose: "Welcome visitors and explain the core value",
      primaryAction: "Get started",
    },
  ],
});`}</pre>
          </div>

          <div className="bg-amber-950/30 border border-amber-900/50 rounded-lg p-4">
            <p className="text-amber-200 text-sm">
              <strong>Required fields:</strong> <code className="bg-slate-900 px-1 rounded">name</code> and a non-empty <code className="bg-slate-900 px-1 rounded">goals</code> array. Everything else is optional. Run <code className="bg-slate-900 px-1 rounded">portal contract validate</code> to verify it.
            </p>
          </div>
        </section>

        {/* Development Server Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">4</div>
            <h2 className="text-2xl font-bold text-white">Start Development</h2>
          </div>

          <p className="text-slate-300 mb-6">
            Launch the dev server with hot module reloading. Your changes appear instantly in the browser.
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 font-mono text-sm mb-6">
            <div className="text-slate-400 mb-2">$ npm run dev</div>
            <div className="text-slate-500 text-xs mt-4">Runs <span className="text-slate-300">portal dev</span> on http://localhost:3000 by default.</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">Hot Reload</h3>
              <p className="text-slate-400 text-sm">Edit files and see changes instantly without losing state.</p>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">Contract-Aware</h3>
              <p className="text-slate-400 text-sm">The dev server reloads when <code className="text-slate-300">app.contract.ts</code> or routes change.</p>
            </div>
          </div>
        </section>

        {/* Audit Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">5</div>
            <h2 className="text-2xl font-bold text-white">Audit Your Application</h2>
          </div>

          <p className="text-slate-300 mb-6">
            Run <code className="bg-slate-900 px-2 py-1 rounded text-blue-300">portal audit</code> to check your app against its contract — SEO, CTAs, links, brand, accessibility, and quality gates.
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 font-mono text-sm mb-6">
            <div className="text-slate-400 mb-2">$ npm run audit</div>
            <div className="text-slate-500 text-xs mt-4">Runs <span className="text-slate-300">portal audit</span>. Add <span className="text-slate-300">--ai</span> for deep analysis or <span className="text-slate-300">--category seo</span> to focus.</div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-slate-900/50 border border-slate-800 rounded-lg p-4">
              <div className="text-green-400 font-bold mt-1">✓</div>
              <div>
                <h4 className="text-white font-semibold">Quality Gates</h4>
                <p className="text-slate-400 text-sm">Enforces gates from your contract — required H1, primary CTA, meta tags, no placeholder copy</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-slate-900/50 border border-slate-800 rounded-lg p-4">
              <div className="text-green-400 font-bold mt-1">✓</div>
              <div>
                <h4 className="text-white font-semibold">Brand & Conversion</h4>
                <p className="text-slate-400 text-sm">Flags forbidden phrases and pages with no clear primary action</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-slate-900/50 border border-slate-800 rounded-lg p-4">
              <div className="text-green-400 font-bold mt-1">✓</div>
              <div>
                <h4 className="text-white font-semibold">Fix It Automatically</h4>
                <p className="text-slate-400 text-sm">Run <code className="text-slate-300">portal improve</code> to generate AI patches for the findings</p>
              </div>
            </div>
          </div>
        </section>

        {/* First Component Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">6</div>
            <h2 className="text-2xl font-bold text-white">Your First Page</h2>
          </div>

          <p className="text-slate-300 mb-6">
            Add a <code className="bg-slate-900 px-2 py-1 rounded text-blue-300">*.page.tsx</code> file to the <code className="bg-slate-900 px-2 py-1 rounded text-blue-300">routes</code> directory and it is registered as a route automatically.
          </p>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 font-mono text-sm mb-6 overflow-x-auto">
            <pre className="text-slate-300">{`// routes/hello.page.tsx
import React from "react";
import { Head } from "@interchained/portal-react";

export default function HelloPage(): React.ReactElement {
  return (
    <>
      <Head title="Hello" description="My first Portal page" />
      <main>
        <h1>Hello from Portal!</h1>
        <p>This page is available at /hello</p>
      </main>
    </>
  );
}`}</pre>
          </div>

          <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-4">
            <p className="text-blue-200 text-sm">
              Prefer to generate it? Run <code className="bg-slate-900 px-2 py-1 rounded">portal generate page &quot;a hello world page&quot; --route /hello</code> and the agent scaffolds it for you.
            </p>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              to="/docs/cli-reference"
              className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-blue-600 transition-colors group"
            >
              <h3 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors">CLI Reference</h3>
              <p className="text-slate-400 text-sm">Every Portal command, flag, and example.</p>
            </Link>
            <Link
              to="/docs/app-contracts"
              className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-blue-600 transition-colors group"
            >
              <h3 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors">App Contracts</h3>
              <p className="text-slate-400 text-sm">Full reference for every contract field.</p>
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-slate-500 text-sm">
          Portal — Getting Started Guide
        </div>
      </div>
    </div>
  );
};

export default GettingStartedPage;
