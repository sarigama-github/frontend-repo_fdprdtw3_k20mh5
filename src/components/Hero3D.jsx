import Spline from '@splinetool/react-spline'

function Hero3D() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 via-purple-800 to-fuchsia-700">
      <div className="absolute inset-0 opacity-60">
        {/* Spline 3D Scene */}
        <Spline scene="https://prod.spline.design/0nVDYJtYF7bLx1sK/scene.splinecode" />
      </div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white p-6">
        <p className="uppercase tracking-widest text-sm md:text-base text-fuchsia-200/90">Live • Immersive • Interactive</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-extrabold drop-shadow-xl">The Neon Echoes</h1>
        <p className="mt-4 max-w-2xl text-fuchsia-100/90 text-sm md:text-base">
          Step onto the virtual stage. Explore the band in 3D, stream tracks, and book us for your next event.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a href="#music" className="px-5 py-2.5 bg-white text-indigo-900 rounded-full font-semibold hover:shadow-lg transition-all">
            Listen Now
          </a>
          <a href="#booking" className="px-5 py-2.5 bg-fuchsia-500/90 hover:bg-fuchsia-400 text-white rounded-full font-semibold transition-colors">
            Book the Band
          </a>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 to-transparent" />
    </section>
  )
}

export default Hero3D
