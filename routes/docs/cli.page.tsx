import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Zap,
  Package,
  Eye,
  AlertCircle,
  Sparkles,
  GitBranch,
  RotateCcw,
  TestTube,
  AlignLeft,
  Cloud,
  Stethoscope,
  MessageSquare,
  Bot,
  FileText,
  Copy,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';

interface Command {
  name: string;
  icon: React.ReactNode;
  description: string;
  usage: string;
  examples: string[];
  flags?: string[];
}

const commands: Command[] = [
  {
    name: 'dev',
    icon: <Zap className="w-5 h-5" />,
    description: 'Start the Portal dev server with hot module reloading.',
    usage: 'portal dev [options]',
    examples: [
      'portal dev',
      'portal dev --port 3001',
      'portal dev --host',
    ],
    flags: ['-p, --port <number>', '-H, --host', '-o, --open'],
  },
  {
    name: 'build',
    icon: <Package className="w-5 h-5" />,
    description: 'Build your Portal app for production.',
    usage: 'portal build [options]',
    examples: [
      'portal build',
      'portal build --out-dir dist',
      'portal build --ssr',
    ],
    flags: ['--out-dir <dir>', '--mode <mode>', '--ssr'],
  },
  {
    name: 'preview',
    icon: <Eye className="w-5 h-5" />,
    description: 'Run the production build locally before deploying.',
    usage: 'portal preview [options]',
    examples: [
      'portal preview',
      'portal preview --port 4173',
    ],
    flags: ['-p, --port <number>'],
  },
  {
    name: 'serve',
    icon: <Cloud className="w-5 h-5" />,
    description: 'Hardened in-memory production server: Brotli compression, HTTP 103 Early Hints, and security headers.',
    usage: 'portal serve [options]',
    examples: [
      'portal serve',
      'portal serve --port 8080 --dir dist',
      'portal serve --csp-add "script-src https://static.cloudflareinsights.com"',
    ],
    flags: [
      '-p, --port <number>',
      '-H, --host <host>',
      '-d, --dir <dir>',
      '--csp-add <fragment>',
      '--csp-policy <policy>',
      '--no-csp',
      '--no-hsts',
      '--no-early-hints',
      '--cors',
    ],
  },
  {
    name: 'compress',
    icon: <Package className="w-5 h-5" />,
    description: 'Pre-compress build output to disk (.br + .gz) for nginx or Caddy static serving.',
    usage: 'portal compress [dir]',
    examples: [
      'portal compress',
      'portal compress dist',
    ],
  },
  {
    name: 'doctor',
    icon: <Stethoscope className="w-5 h-5" />,
    description: 'Check environment, config, contracts, and routes for issues.',
    usage: 'portal doctor [options]',
    examples: [
      'portal doctor',
      'portal doctor --fix',
    ],
    flags: ['--fix'],
  },
  {
    name: 'explain',
    icon: <MessageSquare className="w-5 h-5" />,
    description: 'Explain a route, component, or contract in plain English.',
    usage: 'portal explain <target>',
    examples: [
      'portal explain routes/index.page.tsx',
      'portal explain /docs',
      'portal explain app.contract.ts',
    ],
  },
  {
    name: 'audit',
    icon: <AlertCircle className="w-5 h-5" />,
    description: 'Audit the app against its contract — SEO, CTAs, links, brand, accessibility, and quality.',
    usage: 'portal audit [options]',
    examples: [
      'portal audit',
      'portal audit --ai',
      'portal audit --category seo',
    ],
    flags: ['--ai', '--json', '--category <cat>', '--routes-dir <dir>'],
  },
  {
    name: 'improve',
    icon: <Sparkles className="w-5 h-5" />,
    description: 'Generate AI patches to fix issues found by audit.',
    usage: 'portal improve [target] [options]',
    examples: [
      'portal improve',
      'portal improve --target seo',
      'portal improve --auto',
    ],
    flags: ['--target <cat>', '--auto', '--no-sentinel', '--routes-dir <dir>'],
  },
  {
    name: 'generate',
    icon: <Code2 className="w-5 h-5" />,
    description: 'Generate a page, component, api, or landing page from a description.',
    usage: 'portal generate <type> <description> [options]',
    examples: [
      'portal generate page "pricing page with three tiers"',
      'portal generate component "testimonial card"',
      'portal generate api "contact form handler"',
    ],
    flags: ['-r, --route <path>', '--auto', '--no-sentinel'],
  },
  {
    name: 'guard',
    icon: <CheckCircle className="w-5 h-5" />,
    description: 'Run safety checks on pending agent-generated patches.',
    usage: 'portal guard [options]',
    examples: [
      'portal guard',
      'portal guard --apply',
    ],
    flags: ['--apply'],
  },
  {
    name: 'patch',
    icon: <GitBranch className="w-5 h-5" />,
    description: 'Review and apply a pending agent-generated patch.',
    usage: 'portal patch',
    examples: [
      'portal patch',
    ],
  },
  {
    name: 'rollback',
    icon: <RotateCcw className="w-5 h-5" />,
    description: 'Revert the last applied Portal patch.',
    usage: 'portal rollback [id]',
    examples: [
      'portal rollback',
      'portal rollback <patch-id>',
    ],
  },
  {
    name: 'test',
    icon: <TestTube className="w-5 h-5" />,
    description: 'Run project tests and framework-aware checks.',
    usage: 'portal test [options]',
    examples: [
      'portal test',
      'portal test --watch',
    ],
    flags: ['--watch'],
  },
  {
    name: 'lint',
    icon: <AlignLeft className="w-5 h-5" />,
    description: 'Run ESLint, TypeScript checks, and contract schema validation.',
    usage: 'portal lint',
    examples: [
      'portal lint',
    ],
  },
  {
    name: 'deploy',
    icon: <Cloud className="w-5 h-5" />,
    description: 'Build and prepare a deployment for static, node, or docker targets.',
    usage: 'portal deploy [options]',
    examples: [
      'portal deploy --adapter static',
      'portal deploy --adapter node',
      'portal deploy --adapter docker --tag myapp:latest',
    ],
    flags: ['--adapter <name>', '--out-dir <dir>', '--tag <tag>'],
  },
  {
    name: 'adapter',
    icon: <Package className="w-5 h-5" />,
    description: 'Add a deployment adapter config (static, node, or docker).',
    usage: 'portal adapter add <name>',
    examples: [
      'portal adapter add static',
      'portal adapter add node',
      'portal adapter add docker',
    ],
  },
  {
    name: 'agent',
    icon: <Bot className="w-5 h-5" />,
    description: 'List and run Portal agents defined in your agents/ directory.',
    usage: 'portal agent <list | run>',
    examples: [
      'portal agent list',
      'portal agent run <name>',
    ],
  },
  {
    name: 'contract',
    icon: <FileText className="w-5 h-5" />,
    description: 'Manage app contracts — scaffold and validate.',
    usage: 'portal contract <validate | init>',
    examples: [
      'portal contract init',
      'portal contract validate',
    ],
  },
];

const CommandCard: React.FC<{ command: Command }> = ({ command }) => (
  <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors">
    <div className="flex items-start gap-4 mb-4">
      <div className="text-blue-400 mt-1">{command.icon}</div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white mb-1">{command.name}</h3>
        <p className="text-slate-400 text-sm">{command.description}</p>
      </div>
    </div>

    <div className="space-y-4">
      <div>
        <p className="text-xs font-mono text-slate-500 uppercase tracking-wide mb-2">Usage</p>
        <div className="bg-slate-900 rounded px-3 py-2 flex items-center justify-between group">
          <code className="text-sm text-slate-300">{command.usage}</code>
          <Copy className="w-4 h-4 text-slate-600 group-hover:text-slate-400 cursor-pointer transition-colors" />
        </div>
      </div>

      {command.flags && command.flags.length > 0 && (
        <div>
          <p className="text-xs font-mono text-slate-500 uppercase tracking-wide mb-2">Flags</p>
          <div className="flex flex-wrap gap-2">
            {command.flags.map((flag) => (
              <span
                key={flag}
                className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded font-mono"
              >
                {flag}
              </span>
            ))}
          </div>
        </div>
      )}

      <div>
        <p className="text-xs font-mono text-slate-500 uppercase tracking-wide mb-2">Examples</p>
        <div className="space-y-2">
          {command.examples.map((example, idx) => (
            <div key={idx} className="bg-slate-900 rounded px-3 py-2 flex items-center justify-between group">
              <code className="text-sm text-slate-300">{example}</code>
              <Copy className="w-4 h-4 text-slate-600 group-hover:text-slate-400 cursor-pointer transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function CLIDocsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="w-8 h-8 text-blue-400" />
            <h1 className="text-4xl font-bold">Portal CLI Reference</h1>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl">
            Complete command reference for the Portal CLI. Every command, flag, and example here matches the published <code className="text-slate-300">@interchained/portal-cli</code>.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b border-slate-800 bg-slate-900/30 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Link to="/docs" className="hover:text-slate-300 transition-colors">
              Documentation
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">CLI Reference</span>
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-8">
          <h2 className="text-sm font-mono text-slate-500 uppercase tracking-wide mb-4">Quick Navigation</h2>
          <div className="flex flex-wrap gap-2">
            {commands.map((cmd) => (
              <a
                key={cmd.name}
                href={`#${cmd.name}`}
                className="text-sm bg-slate-800 text-slate-300 px-3 py-1.5 rounded hover:bg-slate-700 hover:text-white transition-colors font-mono"
              >
                {cmd.name}
              </a>
            ))}
          </div>
        </div>

        {/* Command Cards */}
        <div className="grid gap-6">
          {commands.map((command) => (
            <div key={command.name} id={command.name}>
              <CommandCard command={command} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-slate-800 pt-8 pb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-400">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm">{commands.length} commands documented</span>
            </div>
            <Link
              to="/docs"
              className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              Back to Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
