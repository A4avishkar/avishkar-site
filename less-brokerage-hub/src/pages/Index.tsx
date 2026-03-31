import { Button } from "@/components/ui/button";
import { ArrowDown, Shield, TrendingDown, Zap, Star, Download, KeyRound, Lock, Link, BadgePercent, BarChart3 } from "lucide-react";

import appDashboard from "@/assets/app-dashboard.jpg";
import appOptionChain from "@/assets/app-option-chain.jpg";
import appPositions from "@/assets/app-positions.jpg";

const features = [
  {
    icon: Link,
    title: "Connect Any Broker via API",
    description: "Simply enter your broker's API keys and start trading instantly. Supports all major brokers.",
  },
  {
    icon: Lock,
    title: "Secure API Key Handling",
    description: "Your API keys are encrypted end-to-end and stored locally on your device. We never have access to your credentials.",
  },
  {
    icon: BadgePercent,
    title: "First Month Free Brokerage",
    description: "Enjoy zero brokerage for your entire first month. After that, choose a plan that fits your trading volume.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Execution",
    description: "Direct API connection means faster order execution with no middleman delays.",
  },
  {
    icon: Shield,
    title: "Your Keys, Your Control",
    description: "Read-only or full-access — you decide what permissions to grant. Revoke access anytime from your broker.",
  },
  {
    icon: BarChart3,
    title: "OI Indicators & Analytics",
    description: "Track Open Interest data in real-time. Spot trends with built-in OI change, PCR, and multi-strike OI charts.",
  },
  {
    icon: KeyRound,
    title: "Multi-Broker Support",
    description: "Connect multiple broker accounts and manage all your trades from a single, unified dashboard.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-surface">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <h2 className="font-display text-xl font-bold text-foreground">
            Trade<span className="text-gradient-primary">less</span>
          </h2>
          <a href="#download">
            <Button variant="hero" size="sm">
              Get Early Access
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        </div>
        <div className="container relative mx-auto flex items-center justify-center px-6">
          <div className="max-w-2xl space-y-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
              <Zap className="h-4 w-4 text-primary" />
              <span className="font-body text-sm text-muted-foreground">Early Access — Free for First Month</span>
            </div>
            <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Trade
              <span className="text-gradient-primary">less</span>
              <br />
              <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl">Save More on Every Trade</span>
            </h1>
            <p className="mx-auto max-w-md font-body text-lg leading-relaxed text-muted-foreground">
              Connect your broker using API keys, trade securely, and pay zero or minimal brokerage. Your keys stay encrypted on your device — always.
            </p>
            <div id="download" className="flex flex-wrap items-center gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="gap-3 px-8 py-6 text-lg">
                  <Zap className="h-5 w-5" />
                  Get Early Access
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="gap-3 px-8 py-6 text-lg">
                  <Download className="h-5 w-5" />
                  Download APK
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <ArrowDown className="h-6 w-6 animate-bounce text-muted-foreground" />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              How It <span className="text-gradient-primary">Works</span>
            </h2>
            <p className="mt-4 font-body text-muted-foreground">
              Get started in 3 simple steps
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: "01", title: "Join Early Access", desc: "Sign up for early access and get your first month of trading completely free." },
              { step: "02", title: "Enter Your API Keys", desc: "Add your broker's API key and secret. They're encrypted and stored only on your device." },
              { step: "03", title: "Start Trading Free", desc: "Execute trades directly through your broker's API with zero or minimal brokerage fees." },
            ].map((item) => (
              <div key={item.step} className="relative glass-surface rounded-2xl p-8">
                <span className="font-display text-5xl font-bold text-primary/15">{item.step}</span>
                <h3 className="mt-2 mb-3 font-display text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="font-body leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              See It in <span className="text-gradient-primary">Action</span>
            </h2>
            <p className="mt-4 font-body text-muted-foreground">
              A powerful trading experience, right in your pocket.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { img: appDashboard, label: "Live Dashboard", desc: "Real-time market data with OI indicators, PCR & streaming prices." },
              { img: appOptionChain, label: "Option Chain", desc: "Full option chain with Call/Put prices, OI data & strike-level analytics." },
              { img: appPositions, label: "Positions & Holdings", desc: "Track your portfolio, P&L and holdings across multiple brokers." },
            ].map((screen) => (
              <div key={screen.label} className="group flex flex-col items-center gap-4">
                <div className="overflow-hidden rounded-2xl border border-border/50 transition-all duration-300 group-hover:glow-primary group-hover:border-primary/30">
                  <img
                    src={screen.img}
                    alt={screen.label}
                    className="w-full max-w-[280px] object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-display text-lg font-semibold text-foreground">{screen.label}</h3>
                  <p className="mt-1 font-body text-sm text-muted-foreground">{screen.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose <span className="text-gradient-primary">Tradeless</span>?
            </h2>
            <p className="mt-4 font-body text-muted-foreground">
              Everything you need for smarter, cheaper trading.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="glass-surface group rounded-2xl p-8 transition-all duration-300 hover:border-primary/30 hover:glow-primary"
              >
                <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-foreground">{f.title}</h3>
                <p className="font-body leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary p-12 text-center sm:p-16">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/30 blur-[80px]" />
              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/20 blur-[80px]" />
            </div>
            <div className="relative space-y-6">
              <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                Be Among the First to Trade Smarter
              </h2>
              <p className="mx-auto max-w-lg font-body text-muted-foreground">
                Join the early access program and get your first month completely free.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="gap-3 px-8 py-6 text-lg">
                    <Zap className="h-5 w-5" />
                    Join Early Access
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="font-display text-sm font-semibold text-foreground">
            Trade<span className="text-gradient-primary">less</span>
          </p>
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tradeless. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
