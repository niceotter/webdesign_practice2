export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="h-screen flex items-center justify-center">
        <h1
          id="heroText"
          className="text-6xl md:text-8xl font-bold neon-text"
        >
          Opening Soon
        </h1>
      </section>

      {/* ABOUT */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl text-center space-y-4 fade">
          <h2 className="text-4xl font-bold text-neonPurple">About Me</h2>
          <p className="text-gray-300">
            Senior Web Designer with a passion for immersive UI,
            motion-driven storytelling, and experimental visuals.
          </p>
        </div>
      </section>

      {/* WORKS */}
      <section className="min-h-screen px-10 py-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-neonCyan fade">
          Selected Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {['Alpha', 'Beta', 'Gamma'].map((name) => (
            <div
              key={name}
              className="group bg-black/40 rounded-xl overflow-hidden fade"
            >
              <div
                className="h-48 bg-gradient-to-br from-neonPurple to-neonCyan
                           group-hover:scale-110 transition-transform duration-500"
              />
              <p className="p-4">Project {name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center space-y-6 fade">
          <h2 className="text-4xl font-bold text-neonPurple">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['UI/UX', 'Motion', 'Three.js', 'GSAP', 'Design Systems'].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border border-neonCyan rounded-full"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="h-screen flex items-center justify-center">
        <div className="text-center space-y-4 fade">
          <h2 className="text-4xl font-bold text-neonCyan">Contact</h2>
          <p className="text-gray-400">hello@niceotter.design</p>
        </div>
      </section>
    </>
  );
}

