import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function BookingForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '', event_date: '', event_location: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${API_BASE}/api/booking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus({ ok: true, msg: 'Request sent! We will get back to you shortly.' })
        setForm({ name: '', email: '', message: '', event_date: '', event_location: '' })
      } else {
        setStatus({ ok: false, msg: data.detail || 'Something went wrong.' })
      }
    } catch (e) {
      setStatus({ ok: false, msg: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="booking" className="mt-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Book the Band</h2>
      <p className="text-gray-600 mt-1">Tell us about your event and we will reach out.</p>

      <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="input" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input className="input" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="input" name="event_date" type="date" placeholder="Event Date" value={form.event_date} onChange={handleChange} />
          <input className="input" name="event_location" placeholder="Event Location" value={form.event_location} onChange={handleChange} />
        </div>
        <textarea className="input min-h-[120px]" name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
        <button disabled={loading} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white rounded-lg font-semibold w-fit">
          {loading ? 'Sending...' : 'Send Request'}
        </button>
        {status && (
          <p className={`${status.ok ? 'text-green-600' : 'text-red-600'} text-sm`}>{status.msg}</p>
        )}
      </form>
    </section>
  )
}

export default BookingForm
