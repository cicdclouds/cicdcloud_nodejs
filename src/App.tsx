export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-indigo-500">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter">AHP<span className="text-indigo-400">cicdclouds</span></div>
        <div className="space-x-8 hidden md:flex text-slate-400">
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">Docs</a>
          <a href="#" className="hover:text-white transition">Showcase</a>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-full font-medium transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <header className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent">
          cloudArchitecture & Devops Engineering.
        </h1>
        <p className="text-lg text-slate-400 mb-10 leading-relaxed">
          Deep dives into scalable, resilient, and cost-effective cloud solutions. Join the community of modern engineers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition">
            Start Building
          </button>
          <button className="border border-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition">
            View Templates
          </button>
        </div>
      </header>

      {/* Feature Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
        {[
          { title: "No Config", desc: "Tailwind v4 works out of the box with Vite." },
          { title: "Hot Reload", desc: "See your style changes instantly in the browser." },
          { title: "Pure Speed", desc: "Optimized for the fastest development workflow." }
        ].map((feature, i) => (
          <div key={i} className="p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-indigo-500/50 transition">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg mb-4 flex items-center justify-center font-bold">0{i+1}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-slate-400">{feature.desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}