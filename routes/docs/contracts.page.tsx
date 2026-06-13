import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, FileText, Settings, CheckCircle, Shield, Zap } from 'lucide-react';

const ContractsDocPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-8 h-8 text-blue-400" />
            <h1 className="text-4xl font-bold">App Contracts</h1>
          </div>
          <p className="text-slate-400 text-lg">
            The living contract that governs your Portal app
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Settings className="w-6 h-6 text-blue-400" />
            Overview
          </h2>
          <p className="text-slate-300 mb-4 leading-relaxed">
            The <code className="bg-slate-800 px-2 py-1 rounded text-blue-300 font-mono">app.contract.ts</code> file is the source of truth for your app. It declares goals, brand, SEO, conversion, policies, quality gates, and per-page intent. Every change an agent proposes is checked against this contract before it touches your code.
          </p>
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mb-6">
            <p className="text-slate-400 text-sm">
              <strong>Location:</strong> <code className="text-blue-300 font-mono">app.contract.ts</code> at your project root. Scaffold one with <code className="text-blue-300 font-mono">portal contract init</code> and verify it with <code className="text-blue-300 font-mono">portal contract validate</code>.
            </p>
          </div>
        </section>

        {/* Full Example */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-amber-400" />
            Full Example
          </h2>
          <pre className="bg-slate-900 border border-slate-700 rounded-lg p-6 font-mono text-sm overflow-x-auto text-slate-300">
{`// app.contract.ts
import { defineApp } from "@interchained/portal-contract";

export default defineApp({
  name: "Mint Salon",
  version: "1.1.0",
  description: "Modern salon booking and services",
  primaryAudience: ["local clients", "returning customers"],
  goals: [
    "Help clients book appointments",
    "Showcase services and pricing",
  ],
  brand: {
    voice: "warm, polished",
    colors: ["#0f2f27", "#d8c7a3"],
    fonts: ["Inter", "Fraunces"],
    forbiddenPhrases: ["cheap", "discount"],
  },
  conversion: {
    primaryGoal: "Book an appointment",
    secondaryGoal: "Join the newsletter",
    successEvents: ["booking_completed", "newsletter_signup"],
  },
  seo: {
    enabled: true,
    primaryKeyword: "salon booking",
    titleTemplate: "%s | Mint Salon",
    defaultDescription: "Book your next appointment at Mint Salon.",
    sitemap: true,
  },
  policies: {
    auth: "optional",
    publishing: "human_review",
    accessibility: "strict",
    forbiddenClaims: ["guaranteed results"],
  },
  qualityGates: {
    requireH1: true,
    requirePrimaryCTA: true,
    requireMetaDescription: true,
    forbidPlaceholderCopy: true,
  },
  pages: [
    { route: "/", purpose: "Convert visitors into bookings", primaryAction: "Book now" },
  ],
});`}
          </pre>
        </section>

        {/* Contract Fields */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Code2 className="w-6 h-6 text-emerald-400" />
            Contract Fields
          </h2>

          {/* name Field */}
          <div className="mb-12 border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-300">name</h3>
            <p className="text-slate-300 mb-4">
              The display name for your application. Used by agents for context and across Portal tooling.
            </p>
            <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto text-slate-300">
{`name: "Mint Salon"`}
            </pre>
            <div className="bg-slate-800/30 rounded-lg p-4 text-slate-300 text-sm">
              <p><strong>Type:</strong> <code className="text-blue-300">string</code></p>
              <p><strong>Required:</strong> Yes</p>
            </div>
          </div>

          {/* goals Field */}
          <div className="mb-12 border-l-4 border-rose-500 pl-6">
            <h3 className="text-xl font-semibold mb-3 text-rose-300">goals</h3>
            <p className="text-slate-300 mb-4">
              The north star for every audit. Agents check that each change serves at least one of these business goals.
            </p>
            <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto text-slate-300">
{`goals: [
  "Help clients book appointments",
  "Showcase services and pricing"
]`}
            </pre>
            <div className="bg-slate-800/30 rounded-lg p-4 text-slate-300 text-sm">
              <p><strong>Type:</strong> <code className="text-blue-300">string[]</code></p>
              <p><strong>Required:</strong> Yes (must be non-empty)</p>
            </div>
          </div>

          {/* brand Field */}
          <div className="mb-12 border-l-4 border-purple-500 pl-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-300">brand</h3>
            <p className="text-slate-300 mb-4">
              Voice, colors, fonts, logo, and phrases agents must never use. Keeps generated copy and UI on-brand.
            </p>
            <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto text-slate-300">
{`brand: {
  voice: "warm, polished",
  colors: ["#0f2f27", "#d8c7a3"],
  fonts: ["Inter", "Fraunces"],
  logo: "/logo.svg",
  forbiddenPhrases: ["cheap", "discount"]
}`}
            </pre>
            <div className="bg-slate-800/30 rounded-lg p-4 text-slate-300 text-sm space-y-2">
              <p><strong>Type:</strong> <code className="text-blue-300">BrandContract</code> (all optional)</p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li><code className="text-blue-300">voice</code> - Tone of voice for generated copy</li>
                <li><code className="text-blue-300">colors</code> - Brand color palette (string[])</li>
                <li><code className="text-blue-300">fonts</code> - Font families (string[])</li>
                <li><code className="text-blue-300">logo</code> - Path or URL to the logo</li>
                <li><code className="text-blue-300">forbiddenPhrases</code> - Words agents may never use</li>
              </ul>
            </div>
          </div>

          {/* conversion Field */}
          <div className="mb-12 border-l-4 border-orange-500 pl-6">
            <h3 className="text-xl font-semibold mb-3 text-orange-300">conversion</h3>
            <p className="text-slate-300 mb-4">
              The single most important action on the site, plus the analytics events that signal success.
            </p>
            <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto text-slate-300">
{`conversion: {
  primaryGoal: "Book an appointment",
  secondaryGoal: "Join the newsletter",
  successEvents: ["booking_completed"]
}`}
            </pre>
            <div className="bg-slate-800/30 rounded-lg p-4 text-slate-300 text-sm space-y-2">
              <p><strong>Type:</strong> <code className="text-blue-300">ConversionContract</code></p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li><code className="text-blue-300">primaryGoal</code> - The #1 action (required)</li>
                <li><code className="text-blue-300">secondaryGoal</code> - Optional secondary action</li>
                <li><code className="text-blue-300">successEvents</code> - Analytics event names (string[])</li>
              </ul>
            </div>
          </div>

          {/* seo Field */}
          <div className="mb-12 border-l-4 border-amber-500 pl-6">
            <h3 className="text-xl font-semibold mb-3 text-amber-300">seo</h3>
            <p className="text-slate-300 mb-4">
              Search optimization defaults. Controls the title template, default description, sitemap, and robots behavior.
            </p>
            <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto text-slate-300">
{`seo: {
  enabled: true,
  primaryKeyword: "salon booking",
  titleTemplate: "%s | Mint Salon",
  defaultDescription: "Book your next appointment.",
  sitemap: true,
  robots: true
}`}
            </pre>
            <div className="bg-slate-800/30 rounded-lg p-4 text-slate-300 text-sm space-y-2">
              <p><strong>Type:</strong> <code className="text-blue-300">SeoContract</code> (all optional)</p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li><code className="text-blue-300">enabled</code> - Turn SEO checks on/off</li>
                <li><code className="text-blue-300">primaryKeyword</code> - Main target keyword</li>
                <li><code className="text-blue-300">titleTemplate</code> - printf-style, e.g. <code>&quot;%s | My App&quot;</code></li>
                <li><code className="text-blue-300">defaultDescription</code> - Fallback meta description</li>
                <li><code className="text-blue-300">sitemap</code> / <code className="text-blue-300">robots</code> - Generate sitemap / robots</li>
              </ul>
            </div>
          </div>

          {/* policies Field */}
          <div className="mb-12 border-l-4 border-teal-500 pl-6">
            <h3 className="text-xl font-semibold mb-3 text-teal-300">
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                policies
              </span>
            </h3>
            <p className="text-slate-300 mb-4">
              How the app is governed: authentication, whether AI patches need human review, accessibility level, and claims agents can never make.
            </p>
            <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto text-slate-300">
{`policies: {
  auth: "optional",            // "none" | "optional" | "required"
  publishing: "human_review",  // "immediate" | "human_review"
  accessibility: "strict",     // "none" | "basic" | "strict"
  forbiddenClaims: ["guaranteed results"]
}`}
            </pre>
            <div className="bg-slate-800/30 rounded-lg p-4 text-slate-300 text-sm space-y-2">
              <p><strong>Type:</strong> <code className="text-blue-300">PolicyContract</code> (all optional)</p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li><code className="text-blue-300">auth</code> - <code>none</code> · <code>optional</code> · <code>required</code></li>
                <li><code className="text-blue-300">publishing</code> - <code>immediate</code> or <code>human_review</code> (show every patch as a diff)</li>
                <li><code className="text-blue-300">accessibility</code> - <code>none</code> · <code>basic</code> · <code>strict</code></li>
                <li><code className="text-blue-300">forbiddenClaims</code> - Absolute claims agents can never generate</li>
              </ul>
            </div>
          </div>

          {/* qualityGates Field */}
          <div className="mb-12 border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-semibold mb-3 text-green-300">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                qualityGates
              </span>
            </h3>
            <p className="text-slate-300 mb-4">
              Explicit pass/fail rules for <code className="bg-slate-800 px-1 rounded">portal audit</code>. Any gate set to <code className="bg-slate-800 px-1 rounded">true</code> becomes a hard fail if violated; unset gates only warn.
            </p>
            <pre className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto text-slate-300">
{`qualityGates: {
  maxBrokenLinks: 0,
  requireMetaTitle: true,
  requireMetaDescription: true,
  requireH1: true,
  requirePrimaryCTA: true,
  requireAltText: true,
  forbidPlaceholderCopy: true,
  forbidUnreplacedTokens: true
}`}
            </pre>
            <div className="bg-slate-800/30 rounded-lg p-4 text-slate-300 text-sm space-y-2">
              <p><strong>Type:</strong> <code className="text-blue-300">QualityGatesContract</code> (all optional)</p>
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li><code className="text-blue-300">maxBrokenLinks</code> - Allowed broken links (number)</li>
                <li><code className="text-blue-300">requireMetaTitle</code> / <code className="text-blue-300">requireMetaDescription</code></li>
                <li><code className="text-blue-300">requireH1</code> / <code className="text-blue-300">requirePrimaryCTA</code> / <code className="text-blue-300">requireAltText</code></li>
                <li><code className="text-blue-300">forbidPlaceholderCopy</code> - Fail on &quot;Lorem ipsum&quot; / &quot;placeholder&quot;</li>
                <li><code className="text-blue-300">forbidUnreplacedTokens</code> - Fail on leftover <code>{`{{…}}`}</code> tokens</li>
              </ul>
            </div>
          </div>

          {/* Additional fields */}
          <div className="mb-4 border-l-4 border-slate-600 pl-6">
            <h3 className="text-xl font-semibold mb-3 text-slate-200">More optional fields</h3>
            <div className="bg-slate-800/30 rounded-lg p-4 text-slate-300 text-sm space-y-2">
              <ul className="list-disc list-inside ml-2 space-y-1">
                <li><code className="text-blue-300">version</code> - Contract schema version (string)</li>
                <li><code className="text-blue-300">description</code> - One-line app description (string)</li>
                <li><code className="text-blue-300">primaryAudience</code> - App-level audiences (string[])</li>
                <li><code className="text-blue-300">data</code> - Named data sources agents may source facts from (Record&lt;string, string&gt;)</li>
                <li><code className="text-blue-300">compliance</code> - <code>requireHumanReviewFor</code>: change types that always need sign-off</li>
                <li><code className="text-blue-300">integrations</code> - Declared services (analytics, emailProvider, payments) so <code>portal doctor</code> can warn about missing config</li>
                <li><code className="text-blue-300">pages</code> - Per-route intent: <code>route</code>, <code>purpose</code>, <code>audience</code>, <code>primaryAction</code>, <code>seoKeyword</code></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-t border-slate-800 pt-8">
          <div className="flex justify-between items-center">
            <Link
              to="/docs"
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              &larr; Back to Docs
            </Link>
            <Link
              to="/docs/cli-reference"
              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              CLI Reference &rarr;
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContractsDocPage;
