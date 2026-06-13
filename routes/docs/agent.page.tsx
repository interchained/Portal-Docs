import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  CheckCircle2,
  AlertCircle,
  GitBranch,
  Zap,
  Shield,
  BookOpen,
  ArrowRight,
  Terminal,
  FileJson,
  Lightbulb,
} from 'lucide-react';

export default function AgentDocsPage(): React.ReactElement {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/docs" className="flex items-center gap-2 transition-colors hover:text-blue-400">
            <BookOpen size={20} />
            <span className="font-semibold">Portal Docs</span>
          </Link>
          <div className="text-sm text-slate-400">Agent &amp; Sentinel Guide</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-6 flex items-start gap-4">
            <div className="rounded-lg bg-blue-500/20 p-3">
              <Zap className="text-blue-400" size={28} />
            </div>
            <div>
              <h1 className="mb-2 text-4xl font-bold">Agent &amp; Sentinel</h1>
              <p className="text-lg text-slate-400">
                Code generation with a built-in reviewer that checks every change against your contract
              </p>
            </div>
          </div>
          <p className="max-w-3xl text-slate-300">
            Portal&apos;s dual-agent system pairs a Runner that generates code with a Sentinel that reviews it
            against your <Link to="/docs/app-contracts" className="text-blue-400 hover:text-blue-300">app contract</Link>,
            self-correcting any violations and applying the result. Pages, landings, and{' '}
            <code className="rounded bg-slate-800 px-2 py-1 text-sm text-emerald-400">portal improve</code> edits are saved as patches in{' '}
            <code className="rounded bg-slate-800 px-2 py-1 text-sm text-emerald-400">.portal/patches</code>,
            so you always have an audit trail you can inspect and roll back.
          </p>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="border-b border-slate-800 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold">
            <Code2 className="text-blue-400" size={28} />
            How It Works
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Runner Card */}
            <div className="rounded-lg border border-slate-800 bg-slate-900 p-8 transition-colors hover:border-blue-500/50">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded bg-blue-500/20 p-2">
                  <Zap className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold">Runner (Code Generator)</h3>
              </div>
              <p className="mb-6 text-slate-400">
                Fast code generation grounded in your contract and existing routes.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 flex-shrink-0 text-green-500" size={18} />
                  <span className="text-sm">Generates React/TypeScript pages and components</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 flex-shrink-0 text-green-500" size={18} />
                  <span className="text-sm">Works from a plain-English description</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 flex-shrink-0 text-green-500" size={18} />
                  <span className="text-sm">Follows Portal&apos;s file-based routing conventions</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 flex-shrink-0 text-green-500" size={18} />
                  <span className="text-sm">Sources facts only from declared contract data</span>
                </li>
              </ul>
            </div>

            {/* Sentinel Card */}
            <div className="rounded-lg border border-slate-800 bg-slate-900 p-8 transition-colors hover:border-purple-500/50">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded bg-purple-500/20 p-2">
                  <Shield className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-bold">Sentinel (Code Reviewer)</h3>
              </div>
              <p className="mb-6 text-slate-400">
                Reviews each generated patch against your contract before it is applied.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 flex-shrink-0 text-green-500" size={18} />
                  <span className="text-sm">Checks changes against contract goals and policies</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 flex-shrink-0 text-green-500" size={18} />
                  <span className="text-sm">Self-corrects violations and applies — never just rejects</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 flex-shrink-0 text-green-500" size={18} />
                  <span className="text-sm">Records a summary and any violations it found</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 flex-shrink-0 text-green-500" size={18} />
                  <span className="text-sm">Skippable with <code className="rounded bg-slate-800 px-1 text-purple-300">--no-sentinel</code></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Patch System */}
      <section className="border-b border-slate-800 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold">
            <FileJson className="text-emerald-400" size={28} />
            Patch System
          </h2>

          <div className="mb-8 rounded-lg border border-slate-800 bg-slate-900 p-8">
            <p className="mb-6 text-slate-300">
              Each page or landing the Runner generates — and every{' '}
              <code className="rounded bg-slate-800 px-2 py-1 text-sm text-emerald-400">portal improve</code> edit — is saved as a JSON patch in the{' '}
              <code className="rounded bg-slate-800 px-2 py-1 text-sm text-emerald-400">.portal/patches</code>{' '}
              directory — one file per patch, named by its id. This is the audit trail behind{' '}
              <code className="rounded bg-slate-800 px-2 py-1 text-sm text-emerald-400">portal patch</code> and{' '}
              <code className="rounded bg-slate-800 px-2 py-1 text-sm text-emerald-400">portal rollback</code>.
            </p>

            <div className="mb-6 rounded border border-slate-700 bg-slate-950 p-6">
              <div className="mb-3 font-mono text-sm text-slate-400">Directory Structure</div>
              <pre className="overflow-x-auto text-sm text-slate-300">
                {`.portal/
└── patches/
    ├── 3f2a9c14-8b7e-4d61-a0c2-5e9f1b3d7a88.json
    ├── 7c1d4e02-2a6f-4b93-9f80-1c2e3a4b5d6f.json
    └── b9e8d7c6-5a4f-4231-8e0d-9a8b7c6d5e4f.json`}
              </pre>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-3 flex items-center gap-2 font-semibold text-slate-200">
                  <GitBranch size={18} className="text-emerald-400" />
                  Each Patch Records
                </h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>&bull; The original file contents</li>
                  <li>&bull; The proposed new contents</li>
                  <li>&bull; A human-readable reason for the change</li>
                  <li>&bull; The Sentinel review (approval, summary, violations)</li>
                  <li>&bull; Status and creation timestamp</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-3 flex items-center gap-2 font-semibold text-slate-200">
                  <Lightbulb size={18} className="text-yellow-400" />
                  Why It Matters
                </h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>&bull; Inspect any change after it is applied</li>
                  <li>&bull; Approve pending patches with <code className="rounded bg-slate-800 px-1 text-slate-300">portal patch</code></li>
                  <li>&bull; Revert with <code className="rounded bg-slate-800 px-1 text-slate-300">portal rollback</code></li>
                  <li>&bull; Full history of agent changes</li>
                  <li>&bull; Every change is a reversible patch</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
            <h4 className="mb-4 flex items-center gap-2 font-semibold text-slate-200">
              <FileJson size={20} className="text-blue-400" />
              Example Patch File
            </h4>
            <div className="overflow-x-auto rounded border border-slate-700 bg-slate-950 p-4">
              <pre className="font-mono text-xs text-slate-300">
                {`{
  "id": "3f2a9c14-8b7e-4d61-a0c2-5e9f1b3d7a88",
  "agent": "portal-improve",
  "file": "routes/index.page.tsx",
  "original": "// code before the change…",
  "proposed": "// code the agent wants to write…",
  "reason": "Add an <h1> and a primary CTA to satisfy quality gates",
  "requiresApproval": true,
  "status": "approved",
  "createdAt": "2026-06-12T10:30:00.000Z",
  "sentinelApproved": true,
  "sentinelSummary": "Serves the stated goals and breaks no brand rules.",
  "sentinelViolations": []
}`}
              </pre>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              <code className="text-slate-400">status</code> is one of <code className="text-slate-400">pending</code>, <code className="text-slate-400">approved</code>, <code className="text-slate-400">rejected</code>, or <code className="text-slate-400">applied</code>.
            </p>
          </div>
        </div>
      </section>

      {/* Portal Generate Command */}
      <section className="border-b border-slate-800 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold">
            <Terminal className="text-cyan-400" size={28} />
            The portal generate Command
          </h2>

          <div className="mb-6 rounded-lg border border-slate-800 bg-slate-900 p-6">
            <p className="mb-4 text-slate-300">
              <code className="rounded bg-slate-800 px-2 py-1 text-sm text-cyan-400">portal generate &lt;type&gt; &lt;description&gt;</code>{' '}
              is the primary way to create code. The type is one of{' '}
              <code className="rounded bg-slate-800 px-1 text-cyan-300">page</code>,{' '}
              <code className="rounded bg-slate-800 px-1 text-cyan-300">component</code>,{' '}
              <code className="rounded bg-slate-800 px-1 text-cyan-300">api</code>, or{' '}
              <code className="rounded bg-slate-800 px-1 text-cyan-300">landing</code>. For{' '}
              <code className="rounded bg-slate-800 px-1 text-cyan-300">page</code> and{' '}
              <code className="rounded bg-slate-800 px-1 text-cyan-300">landing</code>, the Runner generates the code and the
              Sentinel reviews it through the patch pipeline. <code className="rounded bg-slate-800 px-1 text-cyan-300">component</code> and{' '}
              <code className="rounded bg-slate-800 px-1 text-cyan-300">api</code> are direct scaffolds — the file is previewed and
              written straight to disk (no patch, no Sentinel).
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-slate-700 bg-slate-900 p-4">
              <p className="mb-2 text-sm font-medium text-slate-300">Generate a new page at a route:</p>
              <pre className="overflow-x-auto rounded bg-slate-800 p-3 text-sm text-green-400">
                <code>{`portal generate page "dashboard with usage charts" --route /dashboard`}</code>
              </pre>
            </div>
            <div className="rounded-lg border border-slate-700 bg-slate-900 p-4">
              <p className="mb-2 text-sm font-medium text-slate-300">Generate a component:</p>
              <pre className="overflow-x-auto rounded bg-slate-800 p-3 text-sm text-green-400">
                <code>{`portal generate component "user card with name and avatar"`}</code>
              </pre>
            </div>
            <div className="rounded-lg border border-slate-700 bg-slate-900 p-4">
              <p className="mb-2 text-sm font-medium text-slate-300">Skip the Sentinel review:</p>
              <pre className="overflow-x-auto rounded bg-slate-800 p-3 text-sm text-green-400">
                <code>portal generate page "settings page" --route /settings --no-sentinel</code>
              </pre>
            </div>
            <div className="rounded-lg border border-slate-700 bg-slate-900 p-4">
              <p className="mb-2 text-sm font-medium text-slate-300">Skip the Sentinel review and the approval prompt:</p>
              <pre className="overflow-x-auto rounded bg-slate-800 p-3 text-sm text-green-400">
                <code>{`portal generate landing "SaaS product homepage" --no-sentinel --auto`}</code>
              </pre>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-cyan-900/40 bg-cyan-950/20 p-4">
            <p className="text-sm text-cyan-200">
              <strong>Flags:</strong>{' '}
              <code className="rounded bg-slate-800 px-1 text-cyan-300">-r, --route &lt;path&gt;</code>{' '}
              <code className="rounded bg-slate-800 px-1 text-cyan-300">--auto</code>{' '}
              <code className="rounded bg-slate-800 px-1 text-cyan-300">--no-sentinel</code>. See the full{' '}
              <Link to="/docs/cli-reference" className="text-cyan-300 underline hover:text-cyan-200">CLI reference</Link>.
            </p>
          </div>

          <div className="mt-8 rounded-lg border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-slate-200">
              <Lightbulb size={18} className="text-amber-400" />
              What Happens When You Run Generate
            </h3>
            <p className="mb-4 text-sm text-slate-500">
              This is the flow for <code className="rounded bg-slate-800 px-1 text-slate-400">page</code> and{' '}
              <code className="rounded bg-slate-800 px-1 text-slate-400">landing</code>. For{' '}
              <code className="rounded bg-slate-800 px-1 text-slate-400">component</code> (Runner-generated) and{' '}
              <code className="rounded bg-slate-800 px-1 text-slate-400">api</code> (a static template scaffold), Portal shows a preview
              and writes the file directly — no patch and no Sentinel.
            </p>
            <ol className="space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-xs font-bold text-blue-400">1</span>
                <div>
                  <strong className="text-white">Parse Command</strong>
                  <p>Portal reads the type, your description, and any route or flags</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-xs font-bold text-blue-400">2</span>
                <div>
                  <strong className="text-white">Runner Generates Code</strong>
                  <p>The Runner creates the initial page or component</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-xs font-bold text-purple-400">3</span>
                <div>
                  <strong className="text-white">Sentinel Reviews</strong>
                  <p>The Sentinel checks the change against your contract goals and policies (unless <code className="rounded bg-slate-800 px-1 text-purple-300">--no-sentinel</code>)</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400">4</span>
                <div>
                  <strong className="text-white">Save Patch</strong>
                  <p>The change is recorded in <code className="rounded bg-slate-800 px-1 text-emerald-400">.portal/patches</code> as a patch — your audit trail</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400">5</span>
                <div>
                  <strong className="text-white">Apply</strong>
                  <p>With the Sentinel, the patch is applied automatically (self-corrected if needed). With <code className="rounded bg-slate-800 px-1 text-emerald-400">--no-sentinel</code>, Portal previews the change and asks you to apply it now, save it for later (then apply with <code className="rounded bg-slate-800 px-1 text-emerald-400">portal patch</code>), or discard it — or pass <code className="rounded bg-slate-800 px-1 text-emerald-400">--auto</code> to apply without the prompt</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400">6</span>
                <div>
                  <strong className="text-white">Roll Back Anytime</strong>
                  <p>Undo an applied patch with <code className="rounded bg-slate-800 px-1 text-emerald-400">portal rollback</code></p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Managing Agents */}
      <section className="border-b border-slate-800 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold">
            <Terminal className="text-blue-400" size={28} />
            Managing Agents
          </h2>
          <p className="mb-6 max-w-3xl text-slate-300">
            Define agents in your project and run them on demand. <code className="rounded bg-slate-800 px-1 text-blue-300">portal agent list</code> shows
            every configured agent and its permissions; <code className="rounded bg-slate-800 px-1 text-blue-300">portal agent run &lt;name&gt;</code> runs one.
          </p>
          <div className="space-y-4">
            <div className="rounded-lg border border-slate-700 bg-slate-900 p-4">
              <p className="mb-2 text-sm font-medium text-slate-300">List configured agents:</p>
              <pre className="overflow-x-auto rounded bg-slate-800 p-3 text-sm text-green-400">
                <code>portal agent list</code>
              </pre>
            </div>
            <div className="rounded-lg border border-slate-700 bg-slate-900 p-4">
              <p className="mb-2 text-sm font-medium text-slate-300">Run a specific agent:</p>
              <pre className="overflow-x-auto rounded bg-slate-800 p-3 text-sm text-green-400">
                <code>portal agent run content-refresh</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* What Sentinel Checks */}
      <section className="border-b border-slate-800 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold">
            <AlertCircle className="text-red-400" size={28} />
            What the Sentinel Checks
          </h2>

          <div className="space-y-3">
            {[
              {
                violation: 'Forbidden claims',
                fix: 'Catches claims listed in policies.forbiddenClaims',
              },
              {
                violation: 'Forbidden phrases',
                fix: 'Reports phrases listed in brand.forbiddenPhrases',
              },
              {
                violation: 'Unauthorized brand color changes',
                fix: 'Flags colors outside your declared brand palette',
              },
              {
                violation: 'Hallucinated data',
                fix: 'Catches numbers, prices, or names not in your declared data sources',
              },
              {
                violation: 'Task not actually solved',
                fix: 'Verifies the change fulfills the requested task',
              },
              {
                violation: 'Regressions or broken imports',
                fix: 'Detects obvious regressions and broken imports before applying',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-lg border border-slate-700 bg-slate-900 p-4"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-400">{item.violation}</p>
                  <p className="mt-1 text-sm text-slate-400">
                    <ArrowRight className="mb-0.5 mr-1 inline h-3 w-3 text-green-400" />
                    {item.fix}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Structural and SEO checks — required H1, primary CTA, meta tags, alt text, placeholder copy, and unreplaced{' '}
            <code className="rounded bg-slate-800 px-1 text-slate-400">{`{{ }}`}</code> tokens — are enforced separately by{' '}
            <Link to="/docs/cli-reference" className="text-blue-400 hover:text-blue-300">portal audit</Link> and your contract&apos;s quality gates.
          </p>
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between border-t border-slate-800 pt-8">
          <Link
            to="/docs"
            className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to Docs
          </Link>
          <Link
            to="/docs/cli-reference"
            className="flex items-center gap-2 text-sm text-blue-400 transition-colors hover:text-blue-300"
          >
            CLI Reference
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
