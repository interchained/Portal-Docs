import{j as e,L as s}from"./index-BYDTWt1N.js";import{F as t,C as l}from"./file-text-D9fwaNT2.js";import{c as a,Z as r,C as i}from"./zap-BUwLS-Oe.js";import{S as c}from"./shield-DqivBuNo.js";/**
 * @license lucide-react v1.18.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],n=a("settings",o),p=()=>e.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-50",children:[e.jsx("div",{className:"border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-40",children:e.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[e.jsx(t,{className:"w-8 h-8 text-blue-400"}),e.jsx("h1",{className:"text-4xl font-bold",children:"App Contracts"})]}),e.jsx("p",{className:"text-slate-400 text-lg",children:"The living contract that governs your Portal app"})]})}),e.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-12",children:[e.jsxs("section",{className:"mb-16",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4 flex items-center gap-2",children:[e.jsx(n,{className:"w-6 h-6 text-blue-400"}),"Overview"]}),e.jsxs("p",{className:"text-slate-300 mb-4 leading-relaxed",children:["The ",e.jsx("code",{className:"bg-slate-800 px-2 py-1 rounded text-blue-300 font-mono",children:"app.contract.ts"})," file is the source of truth for your app. It declares goals, brand, SEO, conversion, policies, quality gates, and per-page intent. Every change an agent proposes is checked against this contract before it touches your code."]}),e.jsx("div",{className:"bg-slate-800/50 border border-slate-700 rounded-lg p-4 mb-6",children:e.jsxs("p",{className:"text-slate-400 text-sm",children:[e.jsx("strong",{children:"Location:"})," ",e.jsx("code",{className:"text-blue-300 font-mono",children:"app.contract.ts"})," at your project root. Scaffold one with ",e.jsx("code",{className:"text-blue-300 font-mono",children:"portal contract init"})," and verify it with ",e.jsx("code",{className:"text-blue-300 font-mono",children:"portal contract validate"}),"."]})})]}),e.jsxs("section",{className:"mb-16",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-4 flex items-center gap-2",children:[e.jsx(r,{className:"w-6 h-6 text-amber-400"}),"Full Example"]}),e.jsx("pre",{className:"bg-slate-900 border border-slate-700 rounded-lg p-6 font-mono text-sm overflow-x-auto text-slate-300",children:`// app.contract.ts
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
});`})]}),e.jsxs("section",{className:"mb-16",children:[e.jsxs("h2",{className:"text-2xl font-bold mb-8 flex items-center gap-2",children:[e.jsx(i,{className:"w-6 h-6 text-emerald-400"}),"Contract Fields"]}),e.jsxs("div",{className:"mb-12 border-l-4 border-blue-500 pl-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-blue-300",children:"name"}),e.jsx("p",{className:"text-slate-300 mb-4",children:"The display name for your application. Used by agents for context and across Portal tooling."}),e.jsx("pre",{className:"bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto text-slate-300",children:'name: "Mint Salon"'}),e.jsxs("div",{className:"bg-slate-800/30 rounded-lg p-4 text-slate-300 text-sm",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Type:"})," ",e.jsx("code",{className:"text-blue-300",children:"string"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Required:"})," Yes"]})]})]}),e.jsxs("div",{className:"mb-12 border-l-4 border-rose-500 pl-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-rose-300",children:"goals"}),e.jsx("p",{className:"text-slate-300 mb-4",children:"The north star for every audit. Agents check that each change serves at least one of these business goals."}),e.jsx("pre",{className:"bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto text-slate-300",children:`goals: [
  "Help clients book appointments",
  "Showcase services and pricing"
]`}),e.jsxs("div",{className:"bg-slate-800/30 rounded-lg p-4 text-slate-300 text-sm",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Type:"})," ",e.jsx("code",{className:"text-blue-300",children:"string[]"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Required:"})," Yes (must be non-empty)"]})]})]}),e.jsxs("div",{className:"mb-12 border-l-4 border-purple-500 pl-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-purple-300",children:"brand"}),e.jsx("p",{className:"text-slate-300 mb-4",children:"Voice, colors, fonts, logo, and phrases agents must never use. Keeps generated copy and UI on-brand."}),e.jsx("pre",{className:"bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto text-slate-300",children:`brand: {
  voice: "warm, polished",
  colors: ["#0f2f27", "#d8c7a3"],
  fonts: ["Inter", "Fraunces"],
  logo: "/logo.svg",
  forbiddenPhrases: ["cheap", "discount"]
}`}),e.jsxs("div",{className:"bg-slate-800/30 rounded-lg p-4 text-slate-300 text-sm space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Type:"})," ",e.jsx("code",{className:"text-blue-300",children:"BrandContract"})," (all optional)"]}),e.jsxs("ul",{className:"list-disc list-inside ml-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"voice"})," - Tone of voice for generated copy"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"colors"})," - Brand color palette (string[])"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"fonts"})," - Font families (string[])"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"logo"})," - Path or URL to the logo"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"forbiddenPhrases"})," - Words agents may never use"]})]})]})]}),e.jsxs("div",{className:"mb-12 border-l-4 border-orange-500 pl-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-orange-300",children:"conversion"}),e.jsx("p",{className:"text-slate-300 mb-4",children:"The single most important action on the site, plus the analytics events that signal success."}),e.jsx("pre",{className:"bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto text-slate-300",children:`conversion: {
  primaryGoal: "Book an appointment",
  secondaryGoal: "Join the newsletter",
  successEvents: ["booking_completed"]
}`}),e.jsxs("div",{className:"bg-slate-800/30 rounded-lg p-4 text-slate-300 text-sm space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Type:"})," ",e.jsx("code",{className:"text-blue-300",children:"ConversionContract"})]}),e.jsxs("ul",{className:"list-disc list-inside ml-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"primaryGoal"})," - The #1 action (required)"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"secondaryGoal"})," - Optional secondary action"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"successEvents"})," - Analytics event names (string[])"]})]})]})]}),e.jsxs("div",{className:"mb-12 border-l-4 border-amber-500 pl-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-amber-300",children:"seo"}),e.jsx("p",{className:"text-slate-300 mb-4",children:"Search optimization defaults. Controls the title template, default description, sitemap, and robots behavior."}),e.jsx("pre",{className:"bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto text-slate-300",children:`seo: {
  enabled: true,
  primaryKeyword: "salon booking",
  titleTemplate: "%s | Mint Salon",
  defaultDescription: "Book your next appointment.",
  sitemap: true,
  robots: true
}`}),e.jsxs("div",{className:"bg-slate-800/30 rounded-lg p-4 text-slate-300 text-sm space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Type:"})," ",e.jsx("code",{className:"text-blue-300",children:"SeoContract"})," (all optional)"]}),e.jsxs("ul",{className:"list-disc list-inside ml-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"enabled"})," - Turn SEO checks on/off"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"primaryKeyword"})," - Main target keyword"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"titleTemplate"})," - printf-style, e.g. ",e.jsx("code",{children:'"%s | My App"'})]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"defaultDescription"})," - Fallback meta description"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"sitemap"})," / ",e.jsx("code",{className:"text-blue-300",children:"robots"})," - Generate sitemap / robots"]})]})]})]}),e.jsxs("div",{className:"mb-12 border-l-4 border-teal-500 pl-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-teal-300",children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(c,{className:"w-5 h-5"}),"policies"]})}),e.jsx("p",{className:"text-slate-300 mb-4",children:"How the app is governed: authentication, whether AI patches need human review, accessibility level, and claims agents can never make."}),e.jsx("pre",{className:"bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto text-slate-300",children:`policies: {
  auth: "optional",            // "none" | "optional" | "required"
  publishing: "human_review",  // "immediate" | "human_review"
  accessibility: "strict",     // "none" | "basic" | "strict"
  forbiddenClaims: ["guaranteed results"]
}`}),e.jsxs("div",{className:"bg-slate-800/30 rounded-lg p-4 text-slate-300 text-sm space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Type:"})," ",e.jsx("code",{className:"text-blue-300",children:"PolicyContract"})," (all optional)"]}),e.jsxs("ul",{className:"list-disc list-inside ml-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"auth"})," - ",e.jsx("code",{children:"none"})," · ",e.jsx("code",{children:"optional"})," · ",e.jsx("code",{children:"required"})]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"publishing"})," - ",e.jsx("code",{children:"immediate"})," or ",e.jsx("code",{children:"human_review"})," (show every patch as a diff)"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"accessibility"})," - ",e.jsx("code",{children:"none"})," · ",e.jsx("code",{children:"basic"})," · ",e.jsx("code",{children:"strict"})]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"forbiddenClaims"})," - Absolute claims agents can never generate"]})]})]})]}),e.jsxs("div",{className:"mb-12 border-l-4 border-green-500 pl-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-green-300",children:e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(l,{className:"w-5 h-5"}),"qualityGates"]})}),e.jsxs("p",{className:"text-slate-300 mb-4",children:["Explicit pass/fail rules for ",e.jsx("code",{className:"bg-slate-800 px-1 rounded",children:"portal audit"}),". Any gate set to ",e.jsx("code",{className:"bg-slate-800 px-1 rounded",children:"true"})," becomes a hard fail if violated; unset gates only warn."]}),e.jsx("pre",{className:"bg-slate-900 border border-slate-700 rounded-lg p-4 mb-4 font-mono text-sm overflow-x-auto text-slate-300",children:`qualityGates: {
  maxBrokenLinks: 0,
  requireMetaTitle: true,
  requireMetaDescription: true,
  requireH1: true,
  requirePrimaryCTA: true,
  requireAltText: true,
  forbidPlaceholderCopy: true,
  forbidUnreplacedTokens: true
}`}),e.jsxs("div",{className:"bg-slate-800/30 rounded-lg p-4 text-slate-300 text-sm space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Type:"})," ",e.jsx("code",{className:"text-blue-300",children:"QualityGatesContract"})," (all optional)"]}),e.jsxs("ul",{className:"list-disc list-inside ml-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"maxBrokenLinks"})," - Allowed broken links (number)"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"requireMetaTitle"})," / ",e.jsx("code",{className:"text-blue-300",children:"requireMetaDescription"})]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"requireH1"})," / ",e.jsx("code",{className:"text-blue-300",children:"requirePrimaryCTA"})," / ",e.jsx("code",{className:"text-blue-300",children:"requireAltText"})]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"forbidPlaceholderCopy"}),' - Fail on "Lorem ipsum" / "placeholder"']}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"forbidUnreplacedTokens"})," - Fail on leftover ",e.jsx("code",{children:"{{…}}"})," tokens"]})]})]})]}),e.jsxs("div",{className:"mb-4 border-l-4 border-slate-600 pl-6",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3 text-slate-200",children:"More optional fields"}),e.jsx("div",{className:"bg-slate-800/30 rounded-lg p-4 text-slate-300 text-sm space-y-2",children:e.jsxs("ul",{className:"list-disc list-inside ml-2 space-y-1",children:[e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"version"})," - Contract schema version (string)"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"description"})," - One-line app description (string)"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"primaryAudience"})," - App-level audiences (string[])"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"data"})," - Named data sources agents may source facts from (Record<string, string>)"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"compliance"})," - ",e.jsx("code",{children:"requireHumanReviewFor"}),": change types that always need sign-off"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"integrations"})," - Declared services (analytics, emailProvider, payments) so ",e.jsx("code",{children:"portal doctor"})," can warn about missing config"]}),e.jsxs("li",{children:[e.jsx("code",{className:"text-blue-300",children:"pages"})," - Per-route intent: ",e.jsx("code",{children:"route"}),", ",e.jsx("code",{children:"purpose"}),", ",e.jsx("code",{children:"audience"}),", ",e.jsx("code",{children:"primaryAction"}),", ",e.jsx("code",{children:"seoKeyword"})]})]})})]})]}),e.jsx("section",{className:"border-t border-slate-800 pt-8",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx(s,{to:"/docs",className:"text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2",children:"← Back to Docs"}),e.jsx(s,{to:"/docs/cli-reference",className:"text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2",children:"CLI Reference →"})]})})]})]});export{p as default};
