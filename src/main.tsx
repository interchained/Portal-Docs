import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";

const HomePage       = lazy(() => import("../routes/index.page"));
const DocsIndex      = lazy(() => import("../routes/docs/index.page"));
const GettingStarted = lazy(() => import("../routes/docs/getting-started.page"));
const ContractsDoc   = lazy(() => import("../routes/docs/contracts.page"));
const CliDoc         = lazy(() => import("../routes/docs/cli.page"));
const AgentDoc       = lazy(() => import("../routes/docs/agent.page"));

function NotFound(): React.ReactElement {
  return (
    <div
      style={{
        background: "#0A0A0F",
        minHeight: "100vh",
        color: "#E8E8F0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: 24,
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 13, letterSpacing: 3, color: "#22D3EE", marginBottom: 12 }}>
        404
      </div>
      <h1 style={{ fontSize: 28, margin: 0, fontWeight: 700 }}>Page not found</h1>
      <p style={{ color: "#9CA3AF", marginTop: 12, maxWidth: 440, lineHeight: 1.6 }}>
        This page doesn&rsquo;t exist. The link may be out of date.
      </p>
      <div style={{ marginTop: 24, display: "flex", gap: 20 }}>
        <Link to="/" style={{ color: "#22D3EE", textDecoration: "none" }}>
          &larr; Home
        </Link>
        <Link to="/docs" style={{ color: "#22D3EE", textDecoration: "none" }}>
          Browse docs
        </Link>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div style={{ background: "#0A0A0F", minHeight: "100vh" }} />}>
        <Routes>
          <Route path="/"                     element={<HomePage />} />
          <Route path="/docs"                 element={<DocsIndex />} />
          <Route path="/docs/getting-started" element={<GettingStarted />} />
          <Route path="/docs/app-contracts"   element={<ContractsDoc />} />
          <Route path="/docs/cli-reference"   element={<CliDoc />} />
          <Route path="/docs/agent-sentinel"  element={<AgentDoc />} />
          <Route path="*"                     element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
