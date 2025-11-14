import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function MusicSection() {
  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/music/songs`)
        const data = await res.json()
        setSongs(data.items || [])
      } catch (e) {
        console.error('Failed to fetch songs', e)
      } finally {
        setLoading(false)
      }
    }
    fetchSongs()
  }, [])

  return (
    <section id="music" className="mt-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Tracks</h2>
      <p className="text-gray-600 mt-1">Stream a preview from our latest releases</p>

      {loading ? (
        <p className="mt-6 text-gray-500">Loading tracks...</p>
      ) : songs.length === 0 ? (
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">
          No songs found yet. Add songs via the database to see them here.
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {songs.map((song) => (
            <div key={song._id} className="p-4 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">{song.title}</h3>
                {song.duration_sec && (
                  <p className="text-xs text-gray-500">{Math.floor(song.duration_sec/60)}:{String(song.duration_sec%60).padStart(2,'0')}</p>
                )}
              </div>
              {song.stream_url ? (
                <audio controls src={song.stream_url} className="w-40" />
              ) : (
                <span className="text-xs text-gray-400">No preview</span>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default MusicSection
