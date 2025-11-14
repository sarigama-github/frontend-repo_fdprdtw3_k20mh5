import Hero3D from './components/Hero3D'
import MusicSection from './components/MusicSection'
import BookingForm from './components/BookingForm'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-600" />
          <span className="text-xl font-bold text-gray-900">The Neon Echoes</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          <a href="#music" className="hover:text-gray-900">Music</a>
          <a href="#booking" className="hover:text-gray-900">Booking</a>
          <a href="/test" className="hover:text-gray-900">System Check</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4">
        <Hero3D />
        <MusicSection />
        <BookingForm />
      </main>

      <footer className="mt-16 py-8 text-center text-gray-500">
        © {new Date().getFullYear()} The Neon Echoes. All rights reserved.
      </footer>

      <style>{`
        .input { @apply w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 bg-white; }
      `}</style>
    </div>
  )
}

export default App
